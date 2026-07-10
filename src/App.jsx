import { LayoutList } from "lucide-react";
import { useState, useEffect } from "react";
import { TodoForm } from "./components/todoForm";
import { TodoList } from "./components/todoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
  });

  // store the todo in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    if (window.confirm("do you want to delete note")) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-auto p-6">
      <div className="mt-6">
        <div className="flex items-center gap-1 mb-2">
          <LayoutList className="w-6 h-6 text-blue-900" />1
          <p className="text-2xl font-bold">TaskFlow</p>
        </div>
        <h1 className="text-3xl font-bold mb-4">My Simple To-Do App</h1>
      </div>

      {/* Todo App input component */}
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
