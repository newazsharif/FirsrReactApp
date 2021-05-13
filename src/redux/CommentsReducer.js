import * as ActionType from './ActionTypes';

export const CommentsReducer = (state  = {
    errMess : null,
    comments : []
    },action)=>{
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            var comment  = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toUTCString();
            console.log(comment);
            return {...state,errMess : null, comments : state.comments.concat(comment)};
        case ActionType.ADD_COMMNETS:
            return {...state, errMess : null, comments : action.payload }
        default:
            return state
    }
}