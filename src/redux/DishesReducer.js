import * as ActionType from './ActionTypes';


export const DishesReducer = (state = {
    isLoading : true,
    errMess : null,
    dishes : []
},action)=>{
    switch (action.type) {
        case ActionType.LOADING_DISHES:
            return(
                {...state,isLoading : true,errMess:null,dishes : []}
            ) 
        case ActionType.FAILED_DISHES:
            return(
                {...state,isLoading : false,errMess:action.payload,dishes : []}
            ) 
        case ActionType.ADD_DISHES:
            return(
                {...state,isLoading : false,errMess:null,dishes : action.payload}
            )            
        default:
            return state
    }
}