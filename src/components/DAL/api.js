import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "e861c4af-275c-4aad-889e-cfadcd67407a", 
    } 
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    postFollowOnUser(id){
        return instanse.post(`follow/${id}`, {})
    },
    deleteFollowOnUser(id){
        return instanse.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile(profiled){
        return instanse.get(`profile/${profiled}`).then(response => response.data)
    },
    getUserStatus(profiled){
        return instanse.get(`profile/status/${profiled}`).then(response => response.data)
    },
    updateUserStatus(status){
        return instanse.put(`profile/status`, {status: status}).then(response => response.data)
    }
}

export const headerAPI = {
    getAuthFromCurrentUser(){
        return instanse.get(`auth/me`).then(response => response.data)
    },
    getUserIdToIdentify(UserId){
        return instanse.get(`profile/${UserId}`).then(response => response.data)
    },
    login(email, password, rememberMe){
        return instanse.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instanse.delete(`auth/login`).then(response => response.data)
    }
}