// import React from "react";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export const TodoForm = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({
    todo: "",
    priority: "",
  });

  const [taskError, setTaskError] = useState(false);
  const [priorityError, setPriorityError] = useState(false);

  const handleChange = (e) => {
    setTaskError(false);
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.todo) {
      setTaskError(true);
    }

    if (!newTodo.priority) {
      setPriorityError(true);
    }

    if (!newTodo.todo || !newTodo.priority) return;

    const newItem = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...newTodo,
    };

    setTodos((prevTodos) => [...prevTodos, newItem]);
    setNewTodo({ todo: "", priority: "" });
  };

  return (
    <div className="w-full mt-6 justify-between">
      <form className="w-full flex gap-4 item-end" action="">
        <div className="w-[50%] flex flex-col">
          <label className="text-md font-semibold">New Task</label>
          <div>
            <input
              type="text"
              name="todo"
              value={newTodo.todo}
              onChange={handleChange}
              className="h-10 border border-gray-300 bg-gray-50 rounded-md p-2 w-full text-black"
              placeholder="Enter a new task..."
            />
            {taskError ? (
              <p className="text-red-500 text-sm">Task is required</p>
            ) : null}
          </div>
        </div>

        <div className="w-[30%] flex flex-col">
          <label className="text-md font-semibold">Priority</label>

          <div className="relative">
            <Select
              value={newTodo.priority}
              onValueChange={(value) => {
                setPriorityError(false);
                setNewTodo({ ...newTodo, priority: value });
              }}
              name="priority"
              className="flex-1"
            >
              <SelectTrigger className="w-full !h-10 border border-gray-300 rounded-md p-2 bg-gray-50">
                <SelectValue placeholder="Select a priority" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>

            {priorityError ? (
              <p className="text-red-500 text-sm pl-2">Priority is required</p>
            ) : null}
          </div>
        </div>

        <div className="w-[20%] flex flex-col mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="h-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
