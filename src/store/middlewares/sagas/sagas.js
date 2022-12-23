import { takeEvery, call, put, all, fork} from 'redux-saga/effects';
import { authSaga, regSaga, addressListSaga, paymentSaga } from '../sagas';
import { AUTHENTICATE, REGISTRATION, ADDRESS_LIST_SUCCESS, FETCH_LOG_IN, PAYMENT_CARD_SUCCESS } from '../../action-creators/actions';

// export function* authenticateSaga() {
//     yield takeEvery(AUTHENTICATE, authSaga )
// };
// export function* registrationSaga() {
//     yield takeEvery(REGISTRATION, regSaga)
// };
// export function* listSaga() {
//     yield takeEvery(FETCH_LOG_IN, addressListSaga)
// };
// export function* paySaga() {
//     yield takeEvery(PAYMENT_CARD_SUCCESS, paymentSaga)
// }

// export function* mainSaga() {
//     yield all([
//         authenticateSaga(),
//         registrationSaga(),
//         listSaga(),
//         paySaga(),

//     ])
// }

export function* mainSaga() {
    yield takeEvery(AUTHENTICATE, authSaga )
    yield takeEvery(REGISTRATION, regSaga)
    yield takeEvery(FETCH_LOG_IN, addressListSaga)
    yield takeEvery(PAYMENT_CARD_SUCCESS, paymentSaga)
 }
