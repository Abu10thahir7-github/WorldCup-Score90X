import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Match } from '@/types';
import { MatchDetailsResponse } from '@/types/matchDetails';

export function useMatch(matchId: string) {
  return useQuery<MatchDetailsResponse>({
    queryKey: ['match', matchId],
    queryFn: () => worldcupApi.getMatchById(matchId),
    enabled: Boolean(matchId),
  });
}
