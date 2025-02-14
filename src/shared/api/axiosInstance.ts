import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN
    }
})
export default axiosInstance
