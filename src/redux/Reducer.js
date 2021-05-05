import DISHES from '../shared/Dish';
import LEADERS from '../shared/Leaders';
import PROMOTIONS from '../shared/Promotions';
import COMMENTS from '../shared/Comments';

export const initialState = {
    dishes : DISHES,
    leaders : LEADERS,
    promotions : PROMOTIONS,
    comments : COMMENTS
} 


//pure function which return new state. as at initial state is null initialState is passed as default parameter
export const reducer = (state = initialState,action) =>{
    return state;
};