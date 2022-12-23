import { takeEvery, call, put} from 'redux-saga/effects';
import { paymentServer } from '../../../../api/paymentServer';
import { logIn, paymentFailure, paymentSuccess } from '../../../action-creators/actions'


export function* paymentSaga(action) {
  console.log(action.payload)
  const {cardNumber, cardName, cvc, expiryDate, token} = action.payload;
  try{
    const success = yield call(paymentServer, cardNumber, cardName, cvc, expiryDate, token);
  
  }catch(error) {
       yield put(paymentFailure(error));
  }
    
    
}
