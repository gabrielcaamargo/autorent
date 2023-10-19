import { useQuery } from '@tanstack/react-query';
import { getCities } from '../services/getCities';

export function useGetCity(selectedState: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cities', selectedState],
    queryFn: () => getCities(selectedState),
    retry: false,
  });

  return [data, isLoading, error];
}
