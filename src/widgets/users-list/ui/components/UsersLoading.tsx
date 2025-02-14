import Skeleton from "@shared/ui/skeleton"

import styles from '../style/userList.module.scss'

const UsersLoading = () => {
  const skeletons = Array.from({ length: 12 })

  return (
    <div className={styles.userList}>
      {skeletons.map((_, index) => (
        <Skeleton key={index} width="300px" height="400px" borderRadius="12px" />
      ))}
    </div>
  )
}

export default UsersLoading
