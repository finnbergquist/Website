// For future DRY code we can use REDUX - this has not been implemented 

import axios from 'axios'; 

export const FETCH_ART_START = 'FETCH_ART_START';
export const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS';
export const FETCH_ART_FAILURE = 'FETCH_ART_FAILURE';

export const getArtData = () => {
    // load data 
    dispatch({ type: FETCH_ART_START }); 
    
    // uses mock-be api 
    axios
        .get('https://artmuseumdraft.herokuapp.com/art/all')
        .then(response => {
            // successful 
            console.log("Art data response", response.data)

            dispatch({ type: FETCH_ART_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({
                type: FETCH_ART_FAILURE, 
                payload: error.response
            })
        })

}