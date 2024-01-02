import { stopSubmit } from "redux-form"
import { profileAPI } from "../DAL/api"
import { setUserAvatarInHeader } from "./authReducer"

const ADD_POST_ON_WALL = "my-social-network/profile/ADD-POST-ON-WALL"
// const SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA = "my-social-network/profile/SEE-THE-ACTIONS-IN-DIALOGS-TEXTAREA"
const SET_USER_PROFILE = "my-social-network/profile/SET_USER_PROFILE"
const SET_USER_STATUS = "my-social-network/profile/SET_USER_STATUS"
const DELETE_POST = "my-social-network/profile/DELETE_POST"
const TOOGLE_AXIOSING_PROFILE = "my-social-network/profile/TOOGLE_AXIOSING_PROFILE"
const SAVE_PHOTO_SUCCESS = "my-social-network/profile/SAVE_PHOTO_SUCCESS"


let initialState = {
    postsData: [
        {id: 1, text: 'Hi, how are you?', valueOfLikes: 2 },
        {id: 2, text: 'It"s my second post', valueOfLikes: 5 },
        {id: 3, text: 'It"s my first post', valueOfLikes: 20 },
    ],
    // Redux-Form убирает:
    // recievedActionOfUser: ':Type your shit here:',
    profile: null,
    status: "",
    isAxiosing: false,
}

const profileReducer = (State = initialState, action) => {
    switch (action.type) {

        // Redux-Form убирает:
        // case SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA:{
        //     let copyedState = {...State, recievedActionOfUser: action.el}
        //     // copyedState.recievedActionOfUser = action.el;
        //     return copyedState;
        // }

        case ADD_POST_ON_WALL:{
            //Redux-Form убирает:
            // let newPostToPublish = {text: State.recievedActionOfUser, valueOfLikes: 0}
            let copyedState = {...State,
                // Redux-Form убирает:
                // recievedActionOfUser: "",  
                postsData: [...State.postsData, {text: action.payload, valueOfLikes: 0}],}

            // copyedState.postsData.push(newPostToPublish);
            // copyedState.recievedActionOfUser = "";
            return copyedState;
        }
        case SET_USER_PROFILE:{
            let copyedState = {...State, profile: action.profile} 
            // copyedState.recievedActionOfUser = action.el;
            return copyedState;
        }
        case SET_USER_STATUS:{
            let copyedState = {...State, status: action.status} 
            // copyedState.recievedActionOfUser = action.el;
            return copyedState;
        }
        case DELETE_POST:{
            let copyedState = {...State, postsData: State.postsData.filter(el=> el.id !== action.postId)}
            return copyedState;
        }
        case TOOGLE_AXIOSING_PROFILE: {
            let copyedState = {...State, isAxiosing: action.isAxiosing} 
            return copyedState;
        }
        case SAVE_PHOTO_SUCCESS: {
            let copyedState = {...State, profile: {...State.profile, photos: action.photos}} 
            return copyedState;
        }
        default:
            return State;
    }
}

export const addPostOnWallActionCreate = (newPostBody) => ({ type: ADD_POST_ON_WALL, payload: newPostBody })

//Redux-Form убирает:
// export const seeTheActionsInDialogsTextareaActionCreate = (textOfMessageFromTextarea) => ({ type: SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA, el: textOfMessageFromTextarea })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const togglerIsAxiosingProfile = (isAxiosing) => ({ type: TOOGLE_AXIOSING_PROFILE, isAxiosing})

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos})


export const getProfileThunkCreator = (profiled) => {
    return async (dispatch) => {
        dispatch(togglerIsAxiosingProfile(true))
        if (profiled === null){
            return null
        }
        // if (!profiled){
        //     profiled = 30090; 
        //     // TO-DO: Пока что профиль захардкожен, поэтому даже неавторизованный буду на свой профиль попадать.
        // }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profiled}`)
        // | | |
        // v v v
        const data = await profileAPI.getProfile(profiled)
            dispatch(setUserProfile(data))
            dispatch(togglerIsAxiosingProfile(false))
    }    
}

export const getStatusThunkCreator = (profiled) => async (dispatch) => {
        if (profiled === null){
            return null
        }
        // if (!profiled){
        //     profiled = 30090; 
        //     // TO-DO: Пока что профиль захардкожен, поэтому даже неавторизованный буду на свой профиль попадать.
        // }
        const data = await profileAPI.getUserStatus(profiled) //
            dispatch(setUserStatus(data))
}

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateUserStatus(status) 
            if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
    }
}

export const savePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.sendPhoto(file) 
            if(data.resultCode === 0){
                dispatch(savePhotoSuccess(data.data.photos))
                dispatch(setUserAvatarInHeader(data.data.photos.small))
            }
    }
}

export const sendProfileInfoThunkCreator = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().authUser.userId
        const data = await profileAPI.sendProfile(profile) // 
            if(data.resultCode === 0){
                dispatch(getProfileThunkCreator(userId))
            }
            else{
                debugger
                dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
                //{"contacts": {"facebook": data.messages[0]}}
                return Promise.reject(data.messages[0])
            }
    }
}

export default profileReducer;