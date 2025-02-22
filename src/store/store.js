// import { createStore } from "redux";
import counterReducer from "./reducers/reducers";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;