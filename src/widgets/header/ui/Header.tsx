import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { setUsers, clearUsers, RootState } from '@features/user'

import { getUsers } from '@entities/user'

import Input from '@shared/ui/input'
import useDebounce from '@shared/hooks'

import styles from './style/header.module.scss'

const Header = () => {
    const [username, setusername] = useState<string>('')

    const debouncedusername = useDebounce(username, 500)
    const dispatch = useDispatch()

    const { page } = useSelector((state: RootState) => state.users)

    useEffect(() => {
        if (debouncedusername && username) {
            getUsers(debouncedusername, page).then(response => {
                const { items, total_count } = response
                dispatch(setUsers({ users: items, totalUsers: total_count, page }))
            })
                .catch((error) => {
                    const errorMessage = error.response?.data?.message || 'Произошла ошибка'
                    toast.error(errorMessage)
                })
        }

        else dispatch(clearUsers())
    }, [debouncedusername, page])

    useEffect(() => {
        dispatch(clearUsers())
        window.scrollTo(0, 0)
    }, [username])
    
    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <p>Поиск</p>
                <Input value={username} onChange={(e) => setusername(e.target.value)} width='220px' />
            </div>
        </header>
    )
}

export default Header