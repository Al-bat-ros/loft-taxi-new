import { takeEvery, call, put} from 'redux-saga/effects';
import { serverReg } from '../../../../api/regRequest';




export function* regSaga(action) {
    const {email, password, name, surname} = action.payload;
    const success = yield call(serverReg, email, password, name, surname);
    if(success) {
        console.log(success)
    }
}

