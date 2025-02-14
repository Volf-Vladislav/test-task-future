import Skeleton from "@shared/ui/skeleton"

import styles from '../style/userRepository.module.scss'

const RepositoriesLoader = () => {
    return (
        <div className={styles.loader}>
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
            <Skeleton width="100%" height="20px" />
        </div>
    )
}

export default RepositoriesLoader
