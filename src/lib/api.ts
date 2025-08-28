import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { APP_ENV } from 'src/config'

/**
 * Create Axios instance with custom config
 */
export const API: AxiosInstance = axios.create({
  baseURL: APP_ENV.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 *  Request interceptor
 * */
API.interceptors.request.use(
  async axiosConfig => axiosConfig,
  (error: AxiosError) => Promise.reject(error),
)

/**
 * Response interceptor
 **/
API.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async error =>
    Promise.reject({
      message: 'Error occured',
      ...error,
    }),
)
