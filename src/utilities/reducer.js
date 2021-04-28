import React from 'react'

export const initialState = { count: 0 };

// action must be an object {type:'string'}

export function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'multiply':
            return { count: state.count * 2 };
        case 'divide':
            return { count: state.count / 2 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error("action not defined, please contact website administrator");
    }
}

