import { combineReducers, createStore } from "redux"
import {DishesReducer} from "./DishesReducer"
import {LeadersReducer} from "./LeadersReducer"
import {CommentsReducer} from "./CommentsReducer"
import {PromotionsReducer} from "./PromotionsReducer"

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes : DishesReducer,
            leaders : LeadersReducer,
            comments : CommentsReducer,
            promotions : PromotionsReducer
        })
    );
    return store;
}