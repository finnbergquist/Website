// For future DRY code we can use REDUX - this has not been implemented 

import {
    FETCH_ART_START,
    FETCH_ART_SUCCESS,
    FETCH_ART_FAILURE,
} from '../actions/index.js';

const initialState = {
    art: [], 
    isLoading: false, 
    error: ''
}; 

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ART_START: 
            return {
                ...state, 
                isLoading: true, 
                error: ''
            }; 
        case FETCH_ART_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                art: action.payload, 
                error: ''
            }; 
        case FETCH_ART_FAILURE:
            return {
                ...state, 
                isLoading: false, 
                error: action.payload
            }; 
        default: 
            return state; 
    }
}