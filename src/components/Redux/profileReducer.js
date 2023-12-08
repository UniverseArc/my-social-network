import { profileAPI } from "../DAL/api"

const ADD_POST_ON_WALL = "ADD-POST-ON-WALL"
// const SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA = "SEE-THE-ACTIONS-IN-DIALOGS-TEXTAREA"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    postsData: [
        { text: 'Hi, how are you?', valueOfLikes: 2 },
        { text: 'It"s my second post', valueOfLikes: 5 },
        { text: 'It"s my first post', valueOfLikes: 20 },
    ],
    // Redux-Form убирает:
    // recievedActionOfUser: ':Type your shit here:',
    profile: null,
    status: "",
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
        default:
            return State;
    }
}

export const addPostOnWallActionCreate = (newPostBody) => ({ type: ADD_POST_ON_WALL, payload: newPostBody })

//Redux-Form убирает:
// export const seeTheActionsInDialogsTextareaActionCreate = (textOfMessageFromTextarea) => ({ type: SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA, el: textOfMessageFromTextarea })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfileThunkCreator = (profiled) => {
    return (dispatch) => {
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
        profileAPI.getProfile(profiled)
        .then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatusThunkCreator = (profiled) => {
    return (dispatch) => {
        if (profiled === null){
            return null
        }
        // if (!profiled){
        //     profiled = 30090; 
        //     // TO-DO: Пока что профиль захардкожен, поэтому даже неавторизованный буду на свой профиль попадать.
        // }
        profileAPI.getUserStatus(profiled) //
        .then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status) //
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
}

export default profileReducer;