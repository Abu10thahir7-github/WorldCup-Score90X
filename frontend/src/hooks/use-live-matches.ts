import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Match } from '@/types';

export function useLiveMatches() {
  return useQuery<Match[]>({
    queryKey: ['matches', 'live'],
    queryFn: worldcupApi.getLiveMatches,
    refetchInterval: 15000,
  });
}
