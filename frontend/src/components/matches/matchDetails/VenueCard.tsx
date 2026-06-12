import { Landmark, LandPlot } from 'lucide-react';
import Image from 'next/image';
import stadiumicon from '@/public/assets/Images/stadium-icon.png';

interface VenueCardProps {
  venue?: string | null;
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="  w-1/2 border border-slate-800 rounded-xl    p-2 bg-navy-blue">
      {/* Header */}
      <div className=" flex items-center g">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl   p-2">
          <LandPlot size={17} />
        </div>

        <h3 className="flex items-center gap-2 text-lg font-medium text-white">Venue</h3>
      </div>

      {/* Watermark */}
      <div className='flex items-center px-5 gap-4'>
        <div className=" opacity-[10%] ">
          <Image
            src={stadiumicon}
            alt="Watermark"
            width={70}
            height={70}
            style={{
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>
        {/* Content */}
        <div className=" ">
          <p className="  text-sm text-slate-400">Venue</p>

          <h4 className="text-sm font-medium text-blue-400">{venue || 'TBA'}</h4>
        </div>
      </div>
    </div>
  );
}
