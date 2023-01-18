import axios from 'axios'

export const axiosConfig = axios.create({
    method: 'get',
    baseURL: 'https://api.spaceflightnewsapi.net/v3/',
})
