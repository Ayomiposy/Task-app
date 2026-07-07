import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "./ui/table";

export const TodoList = ({ todos }) => {
  return (
    <div className="w-full mt-6 bg-accent p-4 rounded-md">
      <p>A list of all your tasks</p>
      <Table className="w-full mt-4 border-2 border-gray-300 rounded-md">
        <TableHeader className="bg-gray-300">
          <TableRow className="bg-gray-200 border-b-2 border-gray-300">
            <TableHead className="border-r-2 border-gray-300 w-[40%]">
              Task Name
            </TableHead>
            <TableHead className="border-r-2 border-gray-300 text-center">
              Priority
            </TableHead>
            <TableHead className="border-r-2 border-gray-300 text-center">
              Created At
            </TableHead>
            <TableHead className="text-center font-semibold text-blue-500">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium border-r-2 border-gray-300">
                  {todo.todo}
                </TableCell>
                <TableCell
                  className={`border-r-2 border-gray-300 text-center `}
                >
                  <span
                    className={`${
                      todo.priority === "high"
                        ? "bg-red-500"
                        : todo.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    } py-1 px-2 rounded-md text-white`}
                  >
                    {todo.priority}
                  </span>
                </TableCell>
                <TableCell className="border-r-2 border-gray-300 text-center">
                  {todo.createdAt.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <button className="font-lg text-blue-500 rounded-md">
                    <Pencil />
                  </button>
                  <button className="font-lg text-red-500 rounded-md ml-2">
                    <Trash2 />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center p-20">
                No tasks available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
