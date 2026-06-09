import { Person } from '@/types';
import { User, CalendarDays, Flag, Shield, Shirt, Calendar } from 'lucide-react';
interface PlayerProfileCardProps {
  player: Person;
}
export default function PlayerInformation({ player }: PlayerProfileCardProps) {
  const details = [
    {
      icon: User,
      label: 'Full Name',
      value: player.name || '-',
    },
    {
      icon: User,
      label: 'First Name',
      value: player.firstName || '-',
    },
    {
      icon: User,
      label: 'Last Name',
      value: player.lastName || '-',
    },
    {
      icon: CalendarDays,
      label: 'Date of Birth',
      value: player.dateOfBirth
        ? new Date(player.dateOfBirth).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        : '-',
    },
    {
      icon: Flag,
      label: 'Nationality',
      value: player.nationality || '-',
    },
    {
      icon: Shield,
      label: 'Section',
      value: player.section || '-',
    },
    {
      icon: Shirt,
      label: 'Position',
      value: player.position || '-',
    },
    {
      icon: Shirt,
      label: 'Shirt Number',
      value: player.shirtNumber || '-',
    },
  ];
  return (
    <div className="flex  gap-2 ">
      <div className="bg-navy-blue w-[50%] border overflow-hidden border-color    rounded-2xl">
        <h1 className="text-sm font-[400]  px-5 py-3 border-b border-color uppercase">Player Details</h1>
        <div>
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`grid grid-cols-[28px_160px_1fr] bg-slate-950/90  text-sm items-center gap-4 px-3 py-2 ${
                  index !== details.length - 1 ? 'border-b border-slate-800/70' : ''
                }`}
              >
                <Icon size={18} className="text-slate-400" />

                <span className="text-slate-300">{item.label}</span>

                <span className="font-medium text-white">{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%]   ">
        <div className="bg-navy-blue   p-2 rounded-2xl">
          <h1 className="text-sm font-[400] p-2   uppercase">Contract</h1>


            <div className="flex items-center justify-between gap-3 rounded-2xl    bg-slate-950/90 p-2">
              {/* Icon */}
              <div className="flex h-15 w-15 items-center justify-center rounded-full bg-slate-800/40">
                <CalendarDays size={25} className="text-slate-300" />
              </div>

              {/* Contract Dates */}
              <div className="flex flex-1 items-center">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Start</p>
                  <p className="text-sm font-bold text-white">
                    {player.currentTeam.contract?.start || '-'}
                  </p>
                </div>

                <div className="mx-8 h-10 w-px bg-slate-800" />

                <div className="flex-1">
                  <p className=" text-xs uppercase tracking-wide text-slate-400">Until</p>
                  <p className="text-sm font-bold text-white">
                    {player.currentTeam.contract?.until || '-'}
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
