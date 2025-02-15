import { useSelector, useDispatch } from 'react-redux'
import { useRef, useCallback, useEffect } from 'react'

import UsersLoading from './components/UsersLoading'

import { nextPage, RootState } from '@features/user'

import UserListGrid from './components/grid/UserListGrid'

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

    if (isLoading && users.length === 0) return <UsersLoading />
    else return (
        <>
            <UserListGrid users={users} totalUsers={totalUsers} />
            <div ref={lastUserCallback} style={{ height: "20px", marginTop: "10px" }}></div>
        </>
    )
}

export default UsersList
