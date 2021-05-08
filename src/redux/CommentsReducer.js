import COMMENTS from '../shared/Comments';
import * as ActionType from './ActionTypes';

export const CommentsReducer = (state = COMMENTS,action)=>{
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            var comment  = action.payload;
            comment.id = state.length;
            comment.date = new Date().toUTCString();
            console.log(comment);
            return state.concat(comment)
        default:
            return state
    }
}