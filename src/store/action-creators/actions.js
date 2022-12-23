export const FETCH_LOG_IN = 'FETCH_LOG_IN';
export const FETCH_LOG_OUT = 'FETCH_LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';

export const REGISTRATION = 'REGISTRATION';

export const ADDRESS_LIST_SUCCESS = 'ADDRESS_LIST_SUCCESS';
export const ADDRESS_LIST_FAILURE = 'ADDRESS_LIST_FAILURE';

export const PAYMENT_CARD_SUCCESS = 'PAYMENT_CARD_SUCCESS';
export const PAYMENT_CARD_FAILURE = 'PAYMENT_CARD_FAILURE';


export const logIn = () => ({type: FETCH_LOG_IN });
export const logOut = () => ({type: FETCH_LOG_OUT });


export const authenticate = (email, password) => ({
    type: AUTHENTICATE, 
    payload: {email, password},
 });

 export const registration = (email, name, surname, password) => ({
    type: REGISTRATION, 
    payload: {email, name, surname, password},
 });

 export const addressListSuccess = (success) => ({
      type: ADDRESS_LIST_SUCCESS,
      payload: success,
});

export const addressListFailure = (error) => ({
   type: ADDRESS_LIST_FAILURE,
   payload: error,
});

export const paymentSuccess = (cardNumber, cardName, expiryDate, cvc, token) => ({
   type: PAYMENT_CARD_SUCCESS,
   payload: {cardNumber, cardName, expiryDate, cvc,  token},
});

export const paymentFailure = (error) => ({
   type: PAYMENT_CARD_FAILURE,
   payload: error,
});

   

 
 

 