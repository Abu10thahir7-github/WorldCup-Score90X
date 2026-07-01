import { Earth, Users } from 'lucide-react';
import Image from 'next/image';
import Whistle from '@/public/assets/Images/whistle.png';
interface MatchDetailsProps {
  match: any;
}

export default function MatchReferees({ match }: MatchDetailsProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-navy-blue w-1/2 p-2">
      <h3 className="flex items-center gap-2 text-lg font-medium text-white px-2">
        <Users size={20} />
        Referees
      </h3>
      <div className="flex gap-4 items-center px-4">
        <div className=" opacity-[10%] ">
          <Image
            src={Whistle}
            alt="Watermark"
            width={70}
            height={70}
            style={{
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>
        <div className="flex flex-col ">
           {match.referees?.length ? (
            <div className="space-y-3">
              {match.referees.map((ref: any, index: number) => (
                <div
                  key={ref.id ?? `${ref.name}-${index}`}
                  className=" "
                >
                  <p className="font-semibold text-blue-400">{ref.name}</p>

                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-400">
                    <Earth size={15} />
                    {ref.nationality || 'Unknown'}
                  </p>

                  {ref.type && (
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                      {ref.type}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">Referees not assigned yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
