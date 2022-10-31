export type UserState = {
  user: User
  loading: 'pending' | 'loading' | 'fulfilled'
  error: string | null
  role: 'guest' | 'user'
}

export type User = {
  email: string | null
  username: string | null
  bio: string | null
  image: string | null
  token: string | null
}

export type UserResponse = {
  user: User
}

export type CreateNewUserData = {
  username: string
  email: string
  password: string
}

export type LoginData = {
  email: string
  password: string
}
