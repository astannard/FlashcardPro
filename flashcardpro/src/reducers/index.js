import {SET_STACK} from '../actions';


function stack(state = {}, action){
    
    switch(action.type){
        case SET_STACK:
            console.log("action SET_STACK",action);
            return Object.assign({}, state, {
                stack: action.stack
              }) 
        default:
            return state;
    }
}

export default stack;