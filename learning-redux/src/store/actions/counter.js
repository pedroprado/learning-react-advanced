export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

const increment = () => {
    return{
        type: INCREMENT
    }
}

const decrement = () => {
    return{
        type: DECREMENT
    }
}

const add = () => {
    return{
        type: ADD,
        val: 10
    }
}

const subtract = () => {
    return{
        type: SUBTRACT,
        val: 15
    }
}

export default {
    increment,
    decrement,
    add,
    subtract
}