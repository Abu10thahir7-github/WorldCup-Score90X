import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { Team } from '@/types';

export function useTeam(teamId: string) {
  return useQuery<Team>({
    queryKey: ['team', teamId],
    queryFn: () => worldcupApi.getTeamById(teamId),
    enabled: Boolean(teamId),
  });
}
