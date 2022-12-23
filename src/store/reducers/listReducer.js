/* eslint-disable import/no-anonymous-default-export */
import { ADDRESS_LIST_SUCCESS } from '../action-creators/actions';

const initialState  = {

}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADDRESS_LIST_SUCCESS:
            return {...state, addresses: action.payload }
        default: 
            return state
    }
}