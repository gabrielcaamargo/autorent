import { useQuery } from '@tanstack/react-query';
import { getStates } from '../services/getStates';

export function useGetState() {
  const { data, isLoading, error } = useQuery({ queryKey: ['states'], queryFn: getStates, retry: false });

  return [data, isLoading, error];
}
