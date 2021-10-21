import {getApiExample} from "../../../network/net/api_example/apiExample";
import {loginApi} from "../../../network/net/auth_api";

const PREFIX = 'AUTH/'
// const CLEAR = PREFIX + 'CLEAR';

export const loginAction = (body, resolve, reject) => async (dispatch) => {
    try {
        const result = await loginApi(body)
        if (result)
            resolve && resolve()
        else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}