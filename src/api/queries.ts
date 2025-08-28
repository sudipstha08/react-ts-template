import { useQuery } from '@tanstack/react-query'
import { fetchHome } from './services'

export const useQueryHome = () =>
  useQuery({
    queryKey: ['home'],
    queryFn: fetchHome,
  })
