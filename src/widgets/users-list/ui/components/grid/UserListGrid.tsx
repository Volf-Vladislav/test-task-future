import UserListRepositories from "../UserListRepositories"
import UserListTitle from "../UserListTitle"

import UserListGridProps from "../../../model/UserListGridProps"

import Card from "@shared/ui/card"

import styles from '../../style/userList.module.scss'


const UserListGrid = ({users, totalUsers}: UserListGridProps) => {
  return (
    <div>
    <UserListTitle count={totalUsers} />
    <div className={styles.userList}>
        {users.map(user => (
            <Card key={user.id} width="300px" height="400px">
                <div className={styles.scrollableContent}>
                    <div className={styles.imageBlock}>
                        <img src={user.avatar_url} alt={user.login}/>
                        <p>{user.login}</p>
                    </div>
                    <UserListRepositories login={user.login} />
                </div>
            </Card>
        ))}
    </div>
</div>
  )
}

export default UserListGrid
