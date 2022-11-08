import axios, { AxiosRequestConfig, Method } from 'axios'

const URL = process.env.REACT_APP_API_URL

const getHeaders = (userToken: string | null) => {
  const headers = {
    Authorization: <string | undefined>undefined,
  }
  if (userToken) {
    // Костыль. Исправить!
    headers.Authorization = userToken.slice(1, -1)
  }

  return headers
}

export const api = {
  userToken: localStorage.getItem('Token'),

  setUserToken: (token: string | null) => {
    api.userToken = token
    return api
  },

  request: <T>(method: Method, path: string, params?: AxiosRequestConfig) => {
    const url = `${URL}${path}`
    const authHeaders = getHeaders(api.userToken)
    return axios
      .create({ headers: authHeaders })
      .request<T>({
        method,
        url,
        ...params,
      })
      // .then((resp) => {
      //   return resp
      // })
      // .catch((err) => {
      //   throw err
      // })
  },

  get: <T extends unknown>(
    path: string,
    params?: AxiosRequestConfig['params']
  ) => api.request<T>('GET', path, { params }),

  post: <T>(path: string, data: AxiosRequestConfig['data']) =>
    api.request<T>('POST', path, { data }),

  patch: <T>(path: string, data: AxiosRequestConfig['data']) =>
    api.request<T>('PATCH', path, { data }),

  put: <T>(path: string, data: AxiosRequestConfig['data']) =>
    api.request<T>('PUT', path, { data }),

  delete: <T extends unknown = void>(path: string) =>
    api.request<T>('DELETE', path),
}
