import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Match } from '@/types';

export function useMatch(matchId: string) {
  return useQuery<Match>({
    queryKey: ['match', matchId],
    queryFn: () => worldcupApi.getMatchById(matchId),
    enabled: Boolean(matchId),
  });
}
