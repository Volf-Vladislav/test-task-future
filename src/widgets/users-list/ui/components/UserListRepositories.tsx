import { useEffect, useState } from "react"

import RepositoriesLoader from "./RepositoriesLoader"

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

    if (isLoading) <RepositoriesLoader />
    else if (hasError) return (<p className={styles.error}>Ошибка загрузки репозиториев, {errorMessage}</p>)
    else return (
        <div>
            {repositories.map(repo => (
                <div key={repo.id}>
                    <div className={styles.titleContainer}>
                        <h3>{repo.name}</h3>
                        <p>⭐ {repo.stargazers_count}</p>
                    </div>
                    {repo.description && <p>{repo.description}</p>}
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.html_url}
                    </a>
                    <p>Обновлено: {new Date(repo.updated_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    )
}

export default UserListRepositories
