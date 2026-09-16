import type { Todo } from "./todo";

export type TodoAction =
  | { type: "INSERT"; payload: Todo }
  | { type: "DELETE"; payload: number }
  | { type: "UPDATE"; payload: number };
// action type : INSERT, DELETE, UPDATE

export function todoReducer(todos: Todo[], action: TodoAction) {
  switch (action.type) {
    case "INSERT":
      return [...todos, action.payload];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.payload);
    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return todos;
  }
}
