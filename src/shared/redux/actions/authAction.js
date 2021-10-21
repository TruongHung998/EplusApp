import {changePasswordApi, loginApi, refreshTokenApi, requestUserInfo} from "../../../network/net/auth_api";

const PREFIX = 'AUTH/'
export const LOGIN_INFOMATION = PREFIX + 'LOGIN_INFOMATION';
export const USER_INFOMATION = PREFIX + 'USER_INFOMATION';
export const RECEIVE_NEW_TOKEN = PREFIX + 'RECEIVE_NEW_TOKEN';

export const loginAction = (body, resolve, reject) => async (dispatch) => {
    try {
        const result = await loginApi(body)
        if (result) {
            dispatch(receiveLoginInfo(result))
            const infoUser = await requestUserInfo(result?.accessToken)
            dispatch(receiveUserInfo(infoUser))
            resolve && resolve()
        } else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}

export const changePassAction = (body, resolve, reject) => async (dispatch) => {
    try {
        const result = await changePasswordApi(body)
        if (result) {
            resolve && resolve(result)
        } else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}

export const refreshTokenAction = (refreshToken, resolve, reject) => async (dispatch) => {
    try {
        const result = await refreshTokenApi({refreshToken: refreshToken})
        if (result) {
            console.log(result, 'hung')
            dispatch(receiveNewToken(result))
            resolve && resolve(result?.accessToken || "")
        } else reject && reject(result)
    } catch (e) {
        reject && reject(e)
    }
}

const receiveNewToken = (data) => {
    return {
        type: RECEIVE_NEW_TOKEN,
        data: data
    }
}

const receiveLoginInfo = (data) => {
    return {
        type: LOGIN_INFOMATION,
        data: data
    }
}

const receiveUserInfo = (data) => {
    return {
        type: USER_INFOMATION,
        data: data
    }
}