import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'

import {
  UserState,
  CreateNewUserData,
  UserResponse,
  LoginData,
} from '../../types/index'

export const createNewUser = createAsyncThunk(
  'user/createNewUser',
  async (data: CreateNewUserData) => {
    const response = await api.post<UserResponse>('/users', {
      user: data,
    })
    return (await response.data) as UserResponse
  }
)

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await api.get<UserResponse>('/user')
  return await response.data
})

export const login = createAsyncThunk('user/login', async (data: LoginData) => {
  const response = await api.post<UserResponse>('/users/login', {
    user: data,
  })
  return (await response.data) as UserResponse
})

const initialState: UserState = {
  user: {
    email: null,
    username: null,
    bio: null,
    image: null,
    token: null,
  },
  loading: 'pending',
  error: null,
  role: 'guest',
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('Token')
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewUser.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(createNewUser.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.loading = 'fulfilled'
      state.role = 'user'
      state.error = null

      const token = `Token ${state.user.token}`
      localStorage.setItem('Token', JSON.stringify(token))
      // Костыль. Исправить!
      api.setUserToken(`"${token}"`)
    })
    builder.addCase(createNewUser.rejected, (state, { payload }: any) => {
      state.error = payload
      state.loading = 'fulfilled'
    })

    builder.addCase(login.pending, (state) => {
      state.loading = 'loading'
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.loading = 'fulfilled'
      state.role = 'user'
      state.error = null

      const token = `Token ${state.user.token}`
      localStorage.setItem('Token', JSON.stringify(token))
      // Костыль. Исправить!
      api.setUserToken(`"${token}"`)
    })
    builder.addCase(login.rejected, (state, { payload }: any) => {
      console.log('payload error =>> ', payload)
      state.loading = 'fulfilled'
      state.error = payload
    })

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.loading = 'fulfilled'
      state.role = 'user'
      state.error = null
    })
    builder.addCase(getUser.rejected, (state, { payload }: any) => {
      console.log('payload error getUser=>> ', payload)
      state.loading = 'fulfilled'
      state.role = 'guest'
      state.error = payload
    })
  },
})

export const { logout } = user.actions
export default user.reducer
