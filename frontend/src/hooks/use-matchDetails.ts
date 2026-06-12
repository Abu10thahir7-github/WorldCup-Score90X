import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Match } from '@/types';
import { MatchDetails } from '@/types/matchDetails';

export function useMatch(matchId: string) {
  return useQuery<MatchDetails>({
    queryKey: ['match', matchId],
    queryFn: () => worldcupApi.getMatchById(matchId),
    enabled: Boolean(matchId),
  });
}
