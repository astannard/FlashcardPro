import {SET_STACK} from '../actions';

function stack(state = {}, action){
    
    switch(action){
        case SET_STACK:
            return action.stack
        default:
            return state;
    }
}

export default stack;