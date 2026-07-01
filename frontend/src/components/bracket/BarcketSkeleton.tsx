'use client';

export default function BracketSkeleton() {
  const Column = ({ cards }: { cards: number }) => (
    <div className="w-[260px]">
      <div className="mb-6 h-6 w-32 animate-pulse rounded bg-slate-700" />

      <div className="flex flex-col gap-8">
        {Array.from({ length: cards }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-2xl border border-slate-700 bg-slate-800"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="overflow-x-auto bg-[#020817]">
      <div className="flex min-w-[2200px] items-start justify-center gap-12 px-12 py-10">
        <Column cards={8} />
        <Column cards={4} />
        <Column cards={2} />
        <Column cards={1} />

        {/* Final */}

        <div className="mt-[260px]">
          <div className="h-[260px] w-[280px] animate-pulse rounded-3xl border border-slate-700 bg-slate-800" />
        </div>

        <Column cards={1} />
        <Column cards={2} />
        <Column cards={4} />
        <Column cards={8} />
      </div>
    </div>
  );
}