const selectAuthState = (state) => {
    return state.auth
}

export const selectUserId = (state) => {
    return selectAuthState(state)?.userInfomation?.userId || ""
}

export const selectAccessToken = (state) => {
    return selectAuthState(state)?.userInfomation?.accessToken || ""
}

export const selectRefreshToken = (state) => {
    return selectAuthState(state)?.userInfomation?.refreshToken || ""
}

export const selectUserName = (state) => {
    return selectAuthState(state)?.userInfomation?.name || ""
}