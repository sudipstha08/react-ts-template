import { useMutation } from '@tanstack/react-query'

export const useMutationHome = () =>
  useMutation({
    mutationFn: () => Promise.resolve(''),
  })
