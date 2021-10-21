import {LOGIN_INFOMATION, USER_INFOMATION} from "../actions/authAction";


const initialState = {
    userInfomation: {
        accessToken: "",
        refreshToken: "",
        userId: ""
    }
};

const receiveLoginInfo = (state, action) => {
    const _action = action
    const data = _action.data
    if (data) {
        state = {
            ...state,
            userInfomation: {
                ...state.userInfomation,
                userId: data?.userId || "",
                refreshToken: data?.refreshToken || "",
                accessToken: data?.accessToken || ""
            }
        }
    }
    return state
}

const receiveUserInfo = (state, action) => {
    const _action = action
    const data = _action.data
    if (data) {
        state = {
            ...state,
            userInfomation: {
                ...state.userInfomation,
                name: data?.userInfo?.name || "",
            }
        }
    }
    return state
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INFOMATION:
            return receiveLoginInfo(state, action)
        case USER_INFOMATION:
            return receiveUserInfo(state, action)
        default:
            return state;
    }
};


//Transform to JSON to save in localstorage
export const authStateToJs = (state) => {
    const {
        userInfomation
    } = state
    return {
        userInfomation
    }
}

//get Infomation from localstorage
export const authStateFromJs = (state) => {
    const {
        userInfomation
    } = state
    return {
        ...initialState,
        userInfomation
    }
}
