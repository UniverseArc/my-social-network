import { stopSubmit } from "redux-form"
import { headerAPI } from "../DAL/api"

const IS_USER_LOGIN = "IS_USER_LOGIN"
const USER_AVATAR = "USER_AVATAR"

let initialState = { 
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAvatar: undefined,
}


const authReducer = (State = initialState, action) => {
    switch (action.type) {
        case IS_USER_LOGIN: {
            const copyOfState = {...State, ...action.payload}
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
export const getUserAvatar = (photo) => ({type: USER_AVATAR, photo})

export const getAuthFromUserThunkCreator = () => (dispatch) => {
        return headerAPI.getAuthFromCurrentUser()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login, userAvatar} = data.data;
                dispatch(isUserLogin(id, email, login, true, userAvatar))
            }
        return 
        })
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

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthFromUserThunkCreator())
            }
            else{
                let message = data.messages.length > 0 ? data.messages[0] : "Unknown error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        headerAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(isUserLogin(null, null, null, false, undefined))
            }
        })
    }
}

export default authReducer;