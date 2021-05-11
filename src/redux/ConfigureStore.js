import { applyMiddleware, combineReducers, createStore } from "redux"
import {DishesReducer} from "./DishesReducer"
import {LeadersReducer} from "./LeadersReducer"
import {CommentsReducer} from "./CommentsReducer"
import {PromotionsReducer} from "./PromotionsReducer"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./Form"

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes : DishesReducer,
            leaders : LeadersReducer,
            comments : CommentsReducer,
            promotions : PromotionsReducer,
            ...createForms({
                feedback : InitialFeedback
            })
        }),applyMiddleware(logger,thunk)
    );
    return store;
}