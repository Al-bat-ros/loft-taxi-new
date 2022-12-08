/* eslint-disable import/no-anonymous-default-export */
import { FETCH_LOG_IN, FETCH_LOG_OUT } from '../action-creators/actions'

const initialState = {
    isLoggedIn: false,
}

export default function(state = initialState, action) {
   
    switch (action.type) {
        case FETCH_LOG_IN:
            return { isLoggedIn: true };
            
        case FETCH_LOG_OUT :
            return { isLoggedIn: false}
            
        default:
            return state;
    }
   
}

