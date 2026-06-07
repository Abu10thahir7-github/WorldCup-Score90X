import { LoadingSkeleton } from '@/components/shared/loading-skeleton';

export default function Loading() {
  return (
    <div className="space-y-4">
      <LoadingSkeleton className="h-10 w-52 rounded-2xl" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <LoadingSkeleton className="h-64 rounded-[2rem]" />
        <LoadingSkeleton className="h-64 rounded-[2rem]" />
        <LoadingSkeleton className="h-64 rounded-[2rem]" />
      </div>
    </div>
  );
}
