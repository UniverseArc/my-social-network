import { getAuthFromUserThunkCreator } from "./authReducer"

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS"

let initialState = { 
    initializedValue: false,
}

const appReducer = (State = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS: {
            const copyOfState = {...State, initializedValue: true}
            return copyOfState
        }
        default:
            return State;
    }
}

// export const isUserLogin = (id, email, login, isAuth, userAvatar) => ({type: IS_USER_LOGIN, payload: {id, email, login, isAuth, userAvatar}})
// export const getUserAvatar = (photo) => ({type: USER_AVATAR, photo})
export const initialized = () => ({type: INITIALIZING_SUCCESS})

export const initializedSuccessThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthFromUserThunkCreator())
        Promise.all([promise]).then( () => {
            dispatch(initialized())
        })
    }
}

export default appReducer;