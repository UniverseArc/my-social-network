import { usersAPI } from "../DAL/api"
import { reducerObjHelper } from "../Utils/ReducerObjectsHelper/ReducerObjectsHelper"

const FOLLOW = "my-social-network/users/FOLLOW"
const UNFOLLOW = "my-social-network/users/UNFOLLOW"
const SEND_USERS = "my-social-network/users/SEND_USERS"
const SEND_STEPPED_PAGE_NUMBER = "my-social-network/users/SEND_STEPPED_PAGE_NUMBER"
const TOGGLE_IS_AXIOSING = "my-social-network/users/TOGGLE_IS_AXIOSING"
const NULL_USERSDATA_DUE_TO_REQUEST = "my-social-network/users/NULL_USERSDATA_DUE_TO_REQUEST"
const TOGGLE_FOLLOWING_PROCESS = "my-social-network/users/TOGGLE_FOLLOWING_PROCESS"


let initialState = { 
    usersData: [],
    currentPage: 1,
    pageSize: 10,
    TotalUsersCount: 50, //init - 20, normal - расчет производить, но там 25к.
    isAxiosing: false,
    followingInProgress: []
}

const usersReducer = (State = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            const copyOfState = {...State, usersData: reducerObjHelper(State.usersData, action.id, "id", {followed: true})}
            return copyOfState
        }
        case UNFOLLOW: {
            const copyOfState = {...State, usersData: reducerObjHelper(State.usersData, action.id, "id", {followed: false})}
            return copyOfState
        }

        // case FOLLOW: {
        //     const copyOfState = {...State, usersData: State.usersData.map(u => u.id === action.id ? { ...u, followed: true } : u)}
        //     console.log(copyOfState);
        //     return copyOfState
        // }
        // case UNFOLLOW: {
        //     const copyOfState = {...State, usersData: State.usersData.map(u => {
        //         if (u.id === action.id) {
        //             return {...u, followed: false}
        //         }
        //         return u
        //     })}
        //     console.log(copyOfState);
        //     return copyOfState
        // }

        case SEND_USERS: {
            const copyOfState = {...State, usersData: action.users.items, TotalUsersCount: action.users.totalCount}
            // В 55 уроке задваивание пользователей уберется!
            return copyOfState
        }
        case SEND_STEPPED_PAGE_NUMBER: {
            const copyOfState = {...State, currentPage: action.steppedPage}
            return copyOfState
        }
        case TOGGLE_IS_AXIOSING: {
            const copyOfState = {...State, isAxiosing: action.isAxiosing}
            return copyOfState
        }
        case NULL_USERSDATA_DUE_TO_REQUEST: {
            const copyOfState = {...State, usersData: []}
            return copyOfState
        }
        case TOGGLE_FOLLOWING_PROCESS: {
            const copyOfState = {...State, 
                followingInProgress: action.isFetching ? 
                [...State.followingInProgress, action.UserId] : 
                State.followingInProgress.filter(id => id !== action.UserId)
            }
            return copyOfState
        }
        default:
            return State;
    }
}

export const followOnUser = (userId) => ({ type: FOLLOW, id: userId })

export const unFollowFromUser = (userId) => ({ type: UNFOLLOW, id: userId })

export const sendUsers = (users) => ({ type: SEND_USERS, users})

export const getSteppedPageFromUser = (steppedPage) => ({ type: SEND_STEPPED_PAGE_NUMBER, steppedPage})

export const togglerIsAxiosing = (isAxiosing) => ({ type: TOGGLE_IS_AXIOSING, isAxiosing})

export const nullUsersData = () => ({type: NULL_USERSDATA_DUE_TO_REQUEST})

export const toogleFollowingProcess = (isFetching, UserId) => ({type: TOGGLE_FOLLOWING_PROCESS, isFetching, UserId})

// Санки без async await:
export const getUsersThunkCreator = (currentPage, pageSize) => {
        return (dispatch) => {
        dispatch(togglerIsAxiosing(false))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(getSteppedPageFromUser(currentPage))
            dispatch(togglerIsAxiosing(true))
            dispatch(sendUsers(data))
        })
    }
}

export const subscribeToggleFlow = ( dispatch, requestMethod, actionMethod, UserId) => {
        dispatch(toogleFollowingProcess(true, UserId))
        requestMethod(UserId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(actionMethod(UserId))
            }
            dispatch(toogleFollowingProcess(false, UserId))
        })
}

export const unFollowThunkCreator = (UserId) => {
    return (dispatch) => {
        subscribeToggleFlow(dispatch, usersAPI.deleteFollowOnUser.bind(usersAPI), unFollowFromUser, UserId)
    }
}

export const followThunkCreator = (UserId) => {
    return (dispatch) => {
        subscribeToggleFlow(dispatch, usersAPI.postFollowOnUser.bind(usersAPI), followOnUser, UserId)
    }
}

export default usersReducer;