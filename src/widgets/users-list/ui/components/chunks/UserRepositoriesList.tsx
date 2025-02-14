import { Repository } from '@entities/repository'

import styles from '../../style/userRepository.module.scss'

const UserRepositoriesList = ({repositories}: {repositories: Repository[]}) => {
  return (
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

export default UserRepositoriesList
