import {getApiExample} from "../../../network/net/api_example/apiExample";
import {loginApi} from "../../../network/net/auth_api";
import {ExampleForm} from "../constants/modalTypes";
import {AppActionTypes, RECEIVE} from "../actionTypes/appActionTypes";

const PREFIX = 'AUTH/'
export const LOGIN_INFOMATION = PREFIX + 'LOGIN_INFOMATION';

export const loginAction = (body, resolve, reject) => async (dispatch) => {
    try {
        const result = await loginApi(body)
        if (result) {
            dispatch(receiveLoginInfo(result))
            resolve && resolve()
        } else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}
const receiveLoginInfo = (data) => {
    return {
        type: LOGIN_INFOMATION,
        data: data
    }
}