import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "e861c4af-275c-4aad-889e-cfadcd67407a", 
    } 
})

export const usersAPI = {
    // then лучше переносить в bll, А не в dal. Dal - ТОЛЬКО для получения ВСЕХ данных.
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

// Пример API на async await
export const profileAPI = {
    async getProfile(profiled){
       const response = await instanse.get(`profile/${profiled}`)
       return response.data;
    },
    async getUserStatus(profiled){
        const response = await instanse.get(`profile/status/${profiled}`)
        return response.data;
    },
    async updateUserStatus(status){
        const response = await instanse.put(`profile/status`, {status: status})
        return response.data;
    },
    async sendPhoto(file){
        const formData = new FormData();
        formData.append("image", file);
        const response = await instanse.put(`profile/photo`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    },
    async sendProfile(profile){
        const response = await instanse.put(`profile`, profile)
        return response.data;
    },

}

export const headerAPI = {
    getAuthFromCurrentUser(){
        return instanse.get(`auth/me`).then(response => response.data)
    },
    getUserIdToIdentify(UserId){
        return instanse.get(`profile/${UserId}`).then(response => response.data)
    },
    login(email, password, rememberMe, captcha){
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout(){
        return instanse.delete(`auth/login`).then(response => response.data)
    }
}

export const securityAPI = {
    async getCaptchaUrl(){
        debugger
        const response = await instanse.get(`security/get-captcha-url`)
        return response.data
    },
}