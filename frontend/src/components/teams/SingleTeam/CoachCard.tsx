'use client';

import Image from 'next/image';
import { Calendar, ChevronRight, Globe, Shield } from 'lucide-react';
import { getPlayerImage } from '@/services/playersImage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CoachCard({ coach }: { coach: any }) {
  const [image, setImage] = useState('/coach-placeholder.png');

  useEffect(() => {
    if (!coach?.name) return;

    getPlayerImage(coach.name).then((img) => {
      if (img) setImage(img);
    });
  }, [coach?.name]);

  if (!coach) return null;
  console.log(coach);


  return (
    <div className="rounded-2xl border border-slate-800 bg-[#081226] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Head Coach
        </h2>

        <Link href={`/players/${coach.id}`} className="rounded-full bg-indigo-600/20 px-2 py-1 text-xs flex text-indigo-400">
          Profile
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="flex items-center gap-5">

        <Image
          src={image}
          alt={coach.name}
          width={130}
          height={130}
          className="rounded-2xl object-cover border border-slate-700"
          unoptimized
        />

        <div className="flex-1">

          <h3 className="text-3xl font-bold text-white">
            {coach.name}
          </h3>

          <p className="mt-1 text-indigo-400">
            {coach.nationality}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">

            <div className="rounded-xl bg-slate-900 p-3">
              <Globe className="mb-2 text-indigo-400" size={18} />
              <p className="text-sm text-slate-400">Nationality</p>
              <h4 className="font-semibold text-white">
                {coach.nationality}
              </h4>
            </div>

            <div className="rounded-xl bg-slate-900 p-3">
              <Calendar className="mb-2 text-green-400" size={18} />
              <p className="text-sm text-slate-400">Born</p>
              <h4 className="font-semibold text-white">
                {coach.dateOfBirth ?? 'Unknown'}
              </h4>
            </div>

            <div className="rounded-xl bg-slate-900 p-3">
              <Shield className="mb-2 text-yellow-400" size={18} />
              <p className="text-sm text-slate-400">Role</p>
              <h4 className="font-semibold text-white">
                Head Coach
              </h4>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}