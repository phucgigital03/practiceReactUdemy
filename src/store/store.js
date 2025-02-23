// import { createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import counterReducer from "./reducers/reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    posts: {
        posts: [],
        loading: false,
        error: null
    }
}

const store = configureStore({
    reducer: {
        posts: postReducer
    },
    preloadedState: initialState
});

export default store;