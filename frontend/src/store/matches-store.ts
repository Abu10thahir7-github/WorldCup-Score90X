import { create } from 'zustand';
import type { Match } from '@/types';

interface MatchesState {
  selectedMatch?: Match;
  setSelectedMatch: (match: Match | undefined) => void;
}

export const useMatchesStore = create<MatchesState>((set) => ({
  selectedMatch: undefined,
  setSelectedMatch: (match) => set({ selectedMatch: match }),
}));
