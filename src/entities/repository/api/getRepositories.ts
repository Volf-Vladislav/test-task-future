import { axiosInstance } from '@shared/api'

import Repository from '../model/Repository'

const getRepositories = async (login: string): Promise<Repository[]> => {
    try {
        const response = await axiosInstance.get<Repository[]>(`/users/${login}/repos`)

        return response.data
    } catch (error) {
        throw error
    }
}

export default getRepositories
