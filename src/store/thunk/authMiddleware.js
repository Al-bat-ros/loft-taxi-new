import { logIn} from '../action-creators/actions'
import { serverLogin } from '../../api/getRequest';
import {AUTHENTICATE} from '../action-creators/actions'


export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const success = await serverLogin(email, password);
        if(success){
            store.dispatch(logIn());
        }
    } else {
        next(action);
    }

}