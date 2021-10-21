import Utils from "../../utilities/utils";
import {requestApi} from "../index";
import ServerPath from "./ServerPath";
import NetworkUtils from "./NetworkUtils";

const DOMAIN = Utils.getDomain()
const VERSION_API = Utils.getPrefixVersionAPI()

export const loginApi = (body) => {
    return requestApi(NetworkUtils.post, null, `${DOMAIN}auth/login`, body)
}

export const refreshTokenApi = (body) => {
    return requestApi(NetworkUtils.post, {}, `${DOMAIN}auth/refreshToken`, body)
}

export const requestUserInfo = (token) => {
    return requestApi(NetworkUtils.post, {
        Authorization: `Bearer ${token}`,
    }, `${DOMAIN}auth/user`, null)
}

export const changePasswordApi = (body) => {
    return requestApi(NetworkUtils.post, null, `${DOMAIN}user/updatePassword`, body)
}