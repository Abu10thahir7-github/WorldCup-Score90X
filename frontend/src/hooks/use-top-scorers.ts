import { useQuery } from '@tanstack/react-query';
import { worldcupApi } from '@/services/worldcup';
import type { TopScorer } from '@/types';

export function useTopScorers() {
  return useQuery<TopScorer[]>({
    queryKey: ['top-scorers'],
    queryFn: worldcupApi.getTopScorers,
  });
}
