import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Match } from '@/types';

export function useMatches() {
  return useQuery<Match[]>({
    queryKey: ['matches'],
    queryFn: worldcupApi.getMatches,
  });
}
