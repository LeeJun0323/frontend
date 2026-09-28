import { configureStore } from "@reduxjs/toolkit";
import CounterrootReducer from "./features/counter/counterSlice";
import CommentReducer from "./features/comments/commentsSlice";
import TodoReducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    myCounter: CounterrootReducer,
    myComment: CommentReducer,
    myTodo: TodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
