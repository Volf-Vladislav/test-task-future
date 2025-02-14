import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { setUsers, clearUsers, RootState, switchLoading } from '@features/user'

import { getUsers } from '@entities/user'

import Input from '@shared/ui/input'
import useDebounce from '@shared/hooks'

import styles from './style/header.module.scss'

const Header = () => {
    const [username, setUsername] = useState<string>('')

    const debouncedusername = useDebounce(username, 500)
    const dispatch = useDispatch()

    const { page } = useSelector((state: RootState) => state.users)

    useEffect(() => {
        if (debouncedusername) {
            dispatch(switchLoading(true))
            getUsers(debouncedusername, page).then(response => {
                const { items, total_count } = response
                dispatch(setUsers({ users: items, totalUsers: total_count, page }))
                dispatch(switchLoading(false))
            })
                .catch((error) => {
                    const errorMessage = error.response?.data?.message || 'Произошла ошибка'
                    toast.error(errorMessage)
                    dispatch(switchLoading(false))
                })
        }

        else dispatch(clearUsers())
    }, [debouncedusername, page])

    useEffect(() => {
        dispatch(clearUsers())
        window.scrollTo(0, 0)
    }, [debouncedusername])
    
    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <p>Поиск</p>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} width='220px' />
            </div>
        </header>
    )
}

export default Header