import * as ActionType from './ActionTypes';
import {DISHES} from '../shared/Dish';


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

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
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





