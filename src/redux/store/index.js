import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../reducers/todoReducers";


export default configureStore({
   reducer: {
       listTodo: todoReducers
   }
});
