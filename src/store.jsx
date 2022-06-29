import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/bookSlice";
import postReducer from "./features/postSlice";
 

const store = configureStore({
    reducer:{
        booksReducer : booksReducer,
        posts: postReducer
    },
});

export default store;

