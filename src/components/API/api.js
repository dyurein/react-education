import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3d7248d0-c00a-48bc-95e0-9811180122bc'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
         return instance.post(`1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`1.0/follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`1.0/profile/` + userId);

    }
};

export const authAPI = {
    me() { return instance.get(`auth/me`) }
};