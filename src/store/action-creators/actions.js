export const FETCH_LOG_IN = 'FETCH_LOG_IN';
export const FETCH_LOG_OUT = 'FETCH_LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const INPUT_MODAL = 'INPUT_MODAL';
export const REG_MODAL = 'REG_MODAL';

export const logIn = () => ({type: FETCH_LOG_IN });
export const logOut = () => ({type: FETCH_LOG_OUT });
export const authenticate = (email, password) => ({
    type: AUTHENTICATE, 
    payload: {email, password},
 });
 export const inputModal = () => ({type: INPUT_MODAL})
 export const regModal = () => ({type: REG_MODAL})