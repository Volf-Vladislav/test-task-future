import { User } from "@entities/user"

type UserListGridProps = {
    users:  User[]
    totalUsers:  number | null | undefined
}

export default UserListGridProps