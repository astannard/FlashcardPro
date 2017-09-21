export const SET_STACK = "SET_STACK";

export function setStack(stack){
    console.log("setstack actions:",stack);
    return {
        type: SET_STACK,
        stack: stack
    };
}



