import { axiosInstance } from '@shared/api'

import SearchResponse from '../model/SearchResponse'

const getUsers = async (username: string, page: number): Promise<SearchResponse> => {
    try {
        const response = await axiosInstance.get<SearchResponse>('/search/users', {
            params: {
                q: username,
                per_page: 20,
                page
            }
        })

        return response.data
    } catch (error) {
        throw error
    }
}

export default getUsers
