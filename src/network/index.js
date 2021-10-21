import Config from '../config'
import _const from '../constants/common'
import Utils from "../utilities/utils";
import store from '../shared/redux/store/index'
import {selectAccessToken, selectRefreshToken} from "../shared/redux/selector/authSelector";
import {refreshTokenAction} from "../shared/redux/actions/authAction";

//Handle Requeset Api, Where to return results

const internalSuccessHandler = (response, resolve, reject) => {
    const {statusCode} = response;
    if (statusCode === 200 || statusCode === 201) {
        resolve(response);
    } else
        reject(response);
};

export const requestApi = (api, header = {}, url, body) => {
    return new Promise((resolve, reject) => {
        const state = store.getState();
        const _accessToken = selectAccessToken(state)
        const _refreshToken = selectRefreshToken(state)
        if (_accessToken) {
            header = {
                ...header,
                Authorization: `Bearer ${_accessToken}`,
            }
        }
        api(header, url, body, (status, response) => {
            //console log if hard mode == true
            if (Config.SHOW_LOG) {
                console.log('METHOD', api.name);
                console.log('API: ', url);
                console.log('HEADER: ', header);
                console.log('BODY: ', body);
                console.log('BODY: ', JSON.stringify(body));
                console.log('RESPONSE: ', response);
                console.log('STATUS: ', status);
            }
            //handle status && response
            switch (status) {
                case _const.SUCCESS :
                    const {statusCode} = response
                    if (statusCode) {
                        if (statusCode !== 200 && statusCode !== 201) {
                            store.dispatch(refreshTokenAction(_refreshToken, (_newAccessToken) => {
                                header = {
                                    ...header,
                                    Authorization: `Bearer ${_newAccessToken}`,
                                };
                                api(header, url, body, (status, response) => {
                                    switch (status) {
                                        case _const.SUCCESS:
                                            internalSuccessHandler(response, resolve, reject)
                                            break;
                                        default:
                                            reject(response);
                                            break;
                                    }
                                });
                            }, (error) => {
                                reject && reject(error)
                            }))
                        } else {
                            resolve && resolve(response)
                        }
                    } else {
                        resolve && resolve(response)
                    }
                    break;
                case _const.FAILURE:
                    reject && reject(response)
                    break;
                default:
            }
        })
    })
}
