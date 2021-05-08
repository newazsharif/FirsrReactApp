import * as ActionType from './ActionTypes';

export const addComment = (dishId,rating,comment,author) => ({
    type : ActionType.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        comment : comment,
        author : author
    }
})