import { useQuery } from '@tanstack/react-query'
import type { ApiDataInterface } from '@/interfaces/ApiDataInterface'
import { getData } from '@/lib/getData'

export function useGetData() {
  return useQuery<ApiDataInterface>({
    queryKey: ['apiData'],
    queryFn: getData,
  })
}
