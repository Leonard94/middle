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
  async (data: CreateNewUserData, { rejectWithValue }) => {
    try {
      const response = await api.post<UserResponse>('/users', {
        user: data,
      })
      return (await response.data) as UserResponse
    } catch (error: any) {
      const err = error.response.data.errors
      if (err.username && err.email) {
        throw rejectWithValue(
          'Такое имя пользователя и электронная почта уже используются'
        )
      } else if (err.username) {
        throw rejectWithValue('Это имя занято')
      } else if (err.email) {
        throw rejectWithValue('Эта электронная почта уже используется')
      }
      throw rejectWithValue('Что-то пошло не так, попробуйте позже')
    }
  }
)

export const getUser = createAsyncThunk('user/getUser', async () => {
  try {
    const response = await api.get<UserResponse>('/user')
    return await response.data as UserResponse
  } catch (error: any) {
    throw error.response.status
  }
})

export const login = createAsyncThunk('user/login', async (data: LoginData) => {
  try {
    const response = await api.post<UserResponse>('/users/login', {
      user: data,
    })
    return (await response.data) as UserResponse
  } catch (error: any) {
    throw error.response.status
  }
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
    resetError: (state) => {
      state.error = null
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
    builder.addCase(login.rejected, (state, { error }: any) => {
      state.loading = 'fulfilled'
      if (error.message === '403') {
        state.error = 'Неверный логин или пароль'
      } else {
        state.error = 'Что-то пошло не так, попробуйте повторить попытку позже'
      }
    })

    builder.addCase(getUser.fulfilled, (state, {payload}) => {
      state.user = payload.user
      state.loading = 'fulfilled'
      state.role = 'user'
      state.error = null
    })
    builder.addCase(getUser.rejected, (state) => {
      state.loading = 'fulfilled'
      state.role = 'guest'
      localStorage.removeItem('Token')
    })
  },
})

export const { logout, resetError } = user.actions
export default user.reducer
