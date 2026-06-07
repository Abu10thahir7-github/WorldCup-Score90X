import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Person } from '@/types';

export function usePerson(personId: string) {
  return useQuery<Person>({
    queryKey: ['person', personId],
    queryFn: () => worldcupApi.getPersonById(personId),
    enabled: Boolean(personId),
  });
}
