import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MinNewsUpdates() {
  return (
    <div className='bg-slate-900/50 p-4 rounded-xl'>
      <div className='flex mb-2 flex-row justify-between'>
        <h1 className="text-sm     text-white mb-2">News & Updates</h1>
         <Link className="text-sm text-blue-700 flex flex-row gap-2" href='/news'>
          View All News <ArrowRight size={16} className="mt-0.5" />{' '}
        </Link>
      </div>
      <div className='space-y-2'>
 <div className='flex gap-4'>
        <Image src="https://digitalhub.fifa.com/transform/759967ad-f922-4059-a22f-37a44820eda8/FIFA-Power-Rankings-4x3?focuspoint=0.51,0.36&io=transform:fill,aspectratio:4x3,width:240&quality=75"
        className='rounded-xl h-[13vh] w-[30%] object-cover' width={150} height={50}  alt=''/>
        <div className='space-y-1 flex flex-col justify-center'>
          <p className='text-green-600 text-xs'>OFFICIAL</p>
          <p className='text-sm font-medium'>FIFA World Cup 2026 Matches Schedule Released</p>
          <span className='text-xs text-gray-400'>2 hours ago</span>
        </div>
      </div>
      <hr  className='border-slate-700/50'/>
 <div className='flex gap-4'>
        <Image src="https://digitalhub.fifa.com/transform/066f7056-0d6a-4145-b816-0ec16b6b041c/Argentina-celebrate-beating-the-Netherlands-on-penalties-at-the-Arena-de-Sao-Paulo-in-the-2014-FIFA-World-Cup-Brazil-semi-finals?focuspoint=0.42,0.41&io=transform:fill,aspectratio:4x3,width:960&quality=75"
        className='rounded-xl h-[13vh] w-[30%] object-cover' width={150} height={50}  alt=''/>
        <div className='space-y-1 flex flex-col justify-center'>
          <p className='text-green-600 text-xs'>OFFICIAL</p>
          <p className='text-sm font-medium'>Messi :"I'm so happy to be back in the World Cup"</p>
          <span className='text-xs text-gray-400'>5 hours ago</span>
        </div>
      </div>
      </div>

    </div>
  );
}
