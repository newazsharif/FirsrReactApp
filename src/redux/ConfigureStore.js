import { createStore } from "redux"
import { reducer ,initialState } from "./Reducer"


export const configureStore = ()=>{
    const store = createStore(
        reducer,
        initialState
    );
    return store;
}