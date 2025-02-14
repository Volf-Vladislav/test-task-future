
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { User } from '@entities/user'

export type UserSlice = {
  users: User[]
  totalUsers?: number | undefined | null
  page: number
  isLoading?: boolean
}

const initialState: UserSlice = {
  users: [],
  page: 1,
  isLoading: false
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
      state.page = 1
    },
    nextPage: (state) => {
      state.page = state.page + 1
    },
    switchLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

export const { setUsers, clearUsers, nextPage, switchLoading } = userSlice.actions

export default userSlice.reducer