
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { User } from '@entities/user'

export type UserSlice = {
  users: User[]
  totalUsers?: number | undefined | null
  page: number
}

const initialState: UserSlice = {
  users: [],
  page: 1
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserSlice>) => {
      state.users = [...state.users, ...action.payload.users]
      state.totalUsers = action.payload.totalUsers
    },
    clearUsers: (state) => {
      state.users = []
      state.totalUsers = null
    },
    nextPage: (state) => {
      state.page = state.page + 1
    }
  },
})

export const { setUsers, clearUsers, nextPage } = userSlice.actions

export default userSlice.reducer