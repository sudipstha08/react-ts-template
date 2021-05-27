import axios, { AxiosInstance } from 'axios'

export const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})
