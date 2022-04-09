import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";
import { persistReducer,persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    todoo: todoSlice
})

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({reducer : persistedReducer});
const persistor = persistStore(store)

export {store, persistor}