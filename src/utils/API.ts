/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from "axios";

export const API = axios.create({
  baseURL: process.env.BASE_URL,
});

