import { takeEvery, call, put} from 'redux-saga/effects';
import { serverLogin } from '../../../../api/getRequest';
import { logIn} from '../../../action-creators/actions'

export function* authSaga(action) {
    const {email, password} = action.payload;
    const success = yield call(serverLogin, email, password);
    if(success) {
        yield put(logIn())
    }
}

