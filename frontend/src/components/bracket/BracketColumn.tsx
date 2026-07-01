import { BracketMatch } from '@/types/bracket';
import BracketMatchCard from './MatchCard';
import Connector from './Connector';

interface Props {
  title: string;
  matches: BracketMatch[];
  gap: number;
  offset?: number;
}
export default function BracketColumn({ title, matches, gap, offset = 0 }: Props) {
  return (
    <div
      className="flex flex-col"
      style={{
        
        rowGap: gap,
        width: 260,
      }}
    >
      <h2 className="text-white font-bold mb-4 text-center">{title}</h2>

      {matches.map((match, index) => (
        <div key={match.id} className="relative">
          <BracketMatchCard match={match} />

          {index !== matches.length - 1 && <Connector side="right" />}
        </div>
      ))}
    </div>
  );
}
