import { applyMiddleware, combineReducers, createStore } from "redux"
import {DishesReducer} from "./DishesReducer"
import {LeadersReducer} from "./LeadersReducer"
import {CommentsReducer} from "./CommentsReducer"
import {PromotionsReducer} from "./PromotionsReducer"
import logger from "redux-logger"
import thunk from "redux-thunk"

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes : DishesReducer,
            leaders : LeadersReducer,
            comments : CommentsReducer,
            promotions : PromotionsReducer
        }),applyMiddleware(logger,thunk)
    );
    return store;
}