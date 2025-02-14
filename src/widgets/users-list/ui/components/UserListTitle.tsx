import styles from '../style/userList.module.scss'

const UserListTitle = ({ count }: { count?: number | null }) => {
    if (count) return (<p className={styles.listTitle}>Всего пользователей: <span>{count}</span></p>)
    else if (count === 0) return (<p className={styles.listTitle}>Ничего не найдено</p>)
    else return null
}

export default UserListTitle
