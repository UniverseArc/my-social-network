export const getData = (state) => {
    return state.findUser.usersData
} 

export const getCurrentPage = (state) => {
    //diffucult calc logic
    return  state.findUser.currentPage
}

export const getPageSize = (state) => {
    return  state.findUser.pageSize
}

export const getCount = (state) => {
    return  state.findUser.TotalUsersCount
}

export const getisAxiosing = (state) => {
    return  state.findUser.isAxiosing
}

export const getFollowingProcess = (state) => {
    return  state.findUser.followingInProgress
}
