import { usersAPI } from "../DAL/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SEND_USERS = "SEND_USERS"
const SEND_STEPPED_PAGE_NUMBER = "SEND_STEPPED_PAGE_NUMBER"
const TOGGLE_IS_AXIOSING = "TOGGLE_IS_AXIOSING"
const NULL_USERSDATA_DUE_TO_REQUEST = "NULL_USERSDATA_DUE_TO_REQUEST"
const TOGGLE_FOLLOWING_PROCESS = "TOGGLE_FOLLOWING_PROCESS"


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
            const copyOfState = {...State, usersData: State.usersData.map(u => u.id === action.id ? { ...u, followed: true } : u)}
            return copyOfState
        }
        case UNFOLLOW: {
            const copyOfState = {...State, usersData: State.usersData.map(u => {
                if (u.id === action.id) {
                    return {...u, followed: false}
                }
                return u
            })}
             return copyOfState
        }
        case SEND_USERS: {
            const copyOfState = {...State, usersData: action.users}
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
        return (dispatch) => {
        dispatch(togglerIsAxiosing(false))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(getSteppedPageFromUser(currentPage))
            dispatch(togglerIsAxiosing(true))
            dispatch(sendUsers(data.items))
        })
    }
}

export const unFollowThunkCreator = (UserId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProcess(true, UserId))
        usersAPI.deleteFollowOnUser(UserId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowFromUser(UserId))
            }
            dispatch(toogleFollowingProcess(false, UserId))
        })
    }
}

export const followThunkCreator = (UserId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProcess(true, UserId))
        usersAPI.postFollowOnUser(UserId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followOnUser(UserId))
            }
            dispatch(toogleFollowingProcess(false, UserId))
        })
    }
}

export default usersReducer;