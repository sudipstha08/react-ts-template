import axios, { AxiosInstance } from 'axios'

export const API: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
})
