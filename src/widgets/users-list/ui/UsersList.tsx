import { useSelector, useDispatch } from 'react-redux'
import { useRef, useCallback, useEffect } from 'react'

import UserListTitle from './components/UserListTitle'
import UserListRepositories from './components/UserListRepositories'
import UsersLoading from './components/UsersLoading'

import { nextPage, RootState } from '@features/user'

import Card from '@shared/ui/card'

import styles from './style/userList.module.scss'

const UsersList = () => {
    const { users, totalUsers, isLoading } = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch()
    const observerRef = useRef<IntersectionObserver | null>(null)

    const lastUserCallback = useCallback((node: HTMLDivElement | null) => {
        if (observerRef.current) observerRef.current.disconnect()

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && totalUsers && users.length < totalUsers) {
                dispatch(nextPage())
            }
        })

        if (node) observerRef.current.observe(node)
    }, [users.length, totalUsers])

    useEffect(() => {
        return () => {
          observerRef.current?.disconnect()
        }
      }, [])

    if(isLoading && users.length === 0) return <UsersLoading/>
    else return (
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
            <div ref={lastUserCallback} style={{ height: "20px", marginTop: "10px" }}></div>
        </div>
    )
}

export default UsersList
