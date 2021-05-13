import * as ActionType from './ActionTypes';
import {DISHES} from '../shared/Dish';
import fetch from 'cross-fetch';
import { baseURL } from '../shared/baseURL';


//for understanding
// export const addComment = (dishId,rating,comment,author) => {
//     return(
//     {
//         type : ActionType.ADD_COMMENT,
//         payload : {
//             dishId : dishId,
//             rating : rating,
//             comment : comment,
//             author : author
//         }
//     });
  
// };

// export const addComment = function(dishId,rating,comment,author){
//     return(
//     {
//         type : ActionType.ADD_COMMENT,
//         payload : {
//             dishId : dishId,
//             rating : rating,
//             comment : comment,
//             author : author
//         }
//     });
  
// };

export const addComment = (dishId,rating,comment,author) => ({
    type : ActionType.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        comment : comment,
        author : author
    }
});

export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES))
    // }, 2000);
    fetch(baseURL+'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const fetchComments = () => (dispatch)=>{
    fetch(baseURL+'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
}

export const fetchPromos = () => (dispatch)=>{
    promotinosLoading();

    fetch(baseURL+'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
}

export const dishesLoading = ()=>({
    type : ActionType.LOADING_DISHES,
});

export const dishesFailed = (errMess)=>({
    type : ActionType.FAILED_DISHES,
    payload : errMess
})

export const addDishes = (dishes)=>({
    type : ActionType.ADD_DISHES,
    payload : dishes
});

export const addComments = (comments)=>({
    type : ActionType.ADD_COMMNETS,
    payload : comments
});

export const failedComments = (errmess)=>({
    type : ActionType.FAILED_COMMNETS,
    payload : errmess
});

export const addPromotions = (promotions)=>({
    type: ActionType.ADD_PROMOS,
    payload : promotions
});
export const promotinosLoading = ()=>({
    type: ActionType.LOADING_PROMOS
});
export const failedPromos = (errmess)=>({
    type : ActionType.FAILED_PROMOS,
    payload : errmess
});





