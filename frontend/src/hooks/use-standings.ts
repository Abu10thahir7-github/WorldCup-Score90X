import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { StandingGroup } from '@/types';

export function useStandings() {
  return useQuery<StandingGroup[]>({
    queryKey: ['standings'],
    queryFn: worldcupApi.getStandings,
  });
}
