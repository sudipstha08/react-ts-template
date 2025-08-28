import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { config } from '@/utils'

/**
 * Create Axios instance with custom config
 */
export const API: AxiosInstance = axios.create({
  baseURL: config.API_URL,
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
