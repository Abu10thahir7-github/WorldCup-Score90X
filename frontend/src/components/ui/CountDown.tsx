'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  kickOff: string;
}

export default function MatchCountdown({ kickOff }: CountdownProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(kickOff).getTime() - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [kickOff]);

  if (!timeLeft) {
    return (
      <div className="rounded-2xl bg-green-500/10 text-center text-green-400">

      </div>
    );
  }

  return (
    <div className="text-center ">



        <div className="flex   rounded-2xl items-center justify-between p-2 text-center">
          <TimeBox value={timeLeft.days} label="days" />
          <Dot />
          <TimeBox value={timeLeft.hours} label="hrs" />
          <Dot />
          <TimeBox value={timeLeft.minutes} label="min" />
          <Dot />
          <TimeBox value={timeLeft.seconds} label="sec" />
        </div>

    </div>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className=''>
      <div className="text-sm font-bold text-white">
        {value}
      </div>

      <div className="text-xs text-white">
        {label}
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="h-1 w-1 rounded-full bg-white" />
  );
}