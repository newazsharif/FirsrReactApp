import * as ActionType from './ActionTypes';

export const PromotionsReducer = (state = {
    isLoading : true,
    errMess : null,
    promotions : []
},action)=>{
    switch (action.type) {
        case ActionType.ADD_PROMOS:
           return {...state,isLoading : false, errMess : null, promotions : action.payload}
        case ActionType.LOADING_PROMOS:
            return {...state,isLoading : true, errMess : null, promotions : []}
        case ActionType.FAILED_PROMOS:
            return {...state,isLoading : false, errMess : action.payload, promotions : []}
        default:
            return state
    }
}