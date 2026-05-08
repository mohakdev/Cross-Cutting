interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200/80 ${className}`}
      aria-hidden="true"
    />
  );
}

export function PageSkeleton() {
  return (
    <div className="flex-1 space-y-4">
      <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-4 h-8 w-64 max-w-full" />
        <Skeleton className="mt-3 h-4 w-80 max-w-full" />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
          >
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-4 h-9 w-16" />
            <Skeleton className="mt-4 h-6 w-36" />
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm sm:p-7">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="mt-3 h-6 w-48" />
        <div className="mt-5 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
            >
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="mt-2 h-3 w-28" />
                </div>
                <Skeleton className="hidden h-7 w-20 sm:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: 6 }).map((_, cellIndex) => (
            <td key={cellIndex} className="px-3 py-3">
              <Skeleton className="h-4 w-full max-w-[140px]" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export function FormSkeleton() {
  return (
    <div className="flex-1 space-y-5 flex-col flex max-w-3xl mx-auto xl:mx-0">
      <div className="rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm sm:p-8">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="mt-4 h-8 w-72 max-w-full" />
        <Skeleton className="mt-3 h-4 w-80 max-w-full" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Skeleton className="h-28 rounded-2xl" />
          <Skeleton className="h-28 rounded-2xl" />
          <Skeleton className="h-36 rounded-2xl md:col-span-2" />
        </div>
        <div className="mt-8 flex gap-3 border-t border-slate-100 pt-6">
          <Skeleton className="h-12 flex-1 rounded-xl" />
          <Skeleton className="h-12 flex-[2] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
