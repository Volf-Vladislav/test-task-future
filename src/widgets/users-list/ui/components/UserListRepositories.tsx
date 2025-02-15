import { useEffect, useState } from "react"

import RepositoriesLoader from "./RepositoriesLoader"
import UserRepositoriesList from "./grid/UserRepositoriesList"

import { getRepositories, Repository } from "@entities/repository"

import styles from '../style/userRepository.module.scss'


const UserListRepositories = ({ login }: { login: string }) => {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (login) {
            setIsLoading(true)
            getRepositories(login)
                .then(response => {
                    setIsLoading(false)
                    setRepositories(response)
                })
                .catch((error) => {
                    if (!hasError) {
                        setIsLoading(false)
                        setHasError(true)
                        setErrorMessage(error.response?.data?.message)
                    }
                })
        }
    }, [login])

    if (isLoading) return <RepositoriesLoader />
    else if (hasError) return (<p className={styles.error}>Ошибка загрузки репозиториев, {errorMessage}</p>)
    else return <UserRepositoriesList repositories={repositories}/>
}

export default UserListRepositories
