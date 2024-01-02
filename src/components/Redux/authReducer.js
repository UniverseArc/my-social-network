import { stopSubmit } from "redux-form"
import { headerAPI, profileAPI, securityAPI } from "../DAL/api"

const IS_USER_LOGIN = "my-social-network/auth/IS_USER_LOGIN"
const USER_AVATAR = "my-social-network/auth/USER_AVATAR"
const SET_CAPTCHA_URL = "my-social-network/auth/SET_CAPTCHA_URL"
const NULL_CAPTHA = "my-social-network/auth/NULL_CAPTHA"


let initialState = { 
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAvatar: undefined,
    captchaUrl: null,
}


const authReducer = (State = initialState, action) => {
    switch (action.type) {
        case IS_USER_LOGIN: {
            const copyOfState = {...State, ...action.payload}
            return copyOfState
        }
        case SET_CAPTCHA_URL: {
            const copyOfState = {...State, captchaUrl: action.captcha}
            return copyOfState
        }
        case NULL_CAPTHA: {
            const copyOfState = {...State, captchaUrl: null}
            return copyOfState
        }
        case USER_AVATAR: {
            const copyOfState = {...State, userAvatar: action.photo}
            return copyOfState
        }
        default:
            return State;
    }
}

export const isUserLogin = (userId, email, login, isAuth, userAvatar) => ({type: IS_USER_LOGIN, payload: {userId, email, login, isAuth, userAvatar}})
export const setUserAvatarInHeader = (photo) => ({type: USER_AVATAR, photo})
export const setCaptchaUrl = (captcha) => ({type: SET_CAPTCHA_URL, captcha})
const nullCaptchaAfterLogin = () => ({type: NULL_CAPTHA})

export const getAuthFromUserThunkCreator = () => async (dispatch) => {
        const data = await headerAPI.getAuthFromCurrentUser()
        if (data.resultCode === 0) {
            let { id, email, login} = data.data
            dispatch(isUserLogin(id, email, login, true))

            const response = await profileAPI.getProfile(id)
            dispatch(setUserAvatarInHeader(response.photos.small))
        }
        // Легаси хуета ))))))))))))))))
        // .then(data => { //TO-DO: ! ЦЕПОЧКА ПЛОХО ПОЛУЧИЛАСЬ, ПЕРЕПИСАТЬ !
        //     if (data.data.id !== null) {
        //         // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.UserId}`)
        //         // | | |
        //         // v v v
        //         headerAPI.getUserIdToIdentify(data.data.id)
        //         .then(data => {  
        //             dispatch(getUserAvatar(data.photos.small))
        //         })
        //     }
        //     else {
        //         alert("Не можем получить аватарку! Срочно залогиньтесь!")
        //     }
        // })
        // .catch(data => {
        //     console.log("В авторизации случилась ошибка.");
        // })
}
export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
        const data = await headerAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(getAuthFromUserThunkCreator())
            dispatch(nullCaptchaAfterLogin())
        }
        else{
            if(data.resultCode === 10){
                debugger
                dispatch(getCaptchaUrlThunkCreator())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Unknown error"
            dispatch(stopSubmit("login", {_error: message}))
        }
}

export const logoutThunkCreator = () => async (dispatch) => {
        const data = await headerAPI.logout()
        if (data.resultCode === 0) {
            dispatch(isUserLogin(null, null, null, false, undefined))
        }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    debugger
    const data = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(data.url))
}

export default authReducer;