import { useQuery } from '@tanstack/react-query';
import { getWorldCupNews } from '@/lib/wikipedia-news';

export function useWorldCupNews() {
  return useQuery({
    queryKey: ['worldcup-news'],
    queryFn: getWorldCupNews,
  });
}