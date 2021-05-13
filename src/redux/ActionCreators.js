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

export const addComment = (comment) => ({
    type : ActionType.ADD_COMMENT,
    payload : comment
});

export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES))
    // }, 2000);
    fetch(baseURL+'dishes')
        .then(response => {
            if (response.ok) {
                return response
            }
            else{
                var error = new Error('Error '+response.status+ ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error=> {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const fetchComments = () => (dispatch)=>{
    fetch(baseURL+'comments')
        .then(response => {
            if (response.ok) {
                return response
            }
            else{
                var error = new Error('Error '+response.status + ' '+ response.statusText);
                error.response = response;
                throw error;
            }
        },error=>{
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(failedComments(error.message)));
}

export const fetchPromos = () => (dispatch)=>{
    promotinosLoading();

    fetch(baseURL+'promotions')
        .then(response => {
            if (response.ok) {
                return response
            }
            else{
                var error = new Error('Error '+response.status + ' '+ response.statusText);
                error.response = response;
                throw error;
            }
        },error=>{
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error=> dispatch(failedPromos(error.message)))
}

export const postComment = (dishId,rating,comment,author) => dispatch =>{
    var newComment = {
        dishId : dishId,
        rating : rating,
        comment : comment,
        author : author
    }
    newComment.date = new Date().toUTCString();

    fetch(baseURL+'comments',{
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : "same-origin"
    }).then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error '+response.status+' '+response.statusText);
            error.response = response;
            throw error;
        }
    },error=>{
        var errMess = new Error("Error "+ error.message);
        throw errMess;
    }).then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error=> dispatch(failedComments(error.message)));
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





