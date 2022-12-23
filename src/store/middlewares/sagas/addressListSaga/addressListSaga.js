import { call, put} from 'redux-saga/effects';
import { serverAddresList} from '../../../../api/addressListRequest';
import { addressListSuccess, addressListFailure } from '../../../action-creators/actions'

export function* addressListSaga(action) {
     try {
        const success = yield call(serverAddresList);
        yield put(addressListSuccess(success))
     } catch( error ) {
        yield put(addressListFailure(error))
     }
    

}

