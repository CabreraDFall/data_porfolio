import React from 'react';

/**
 * Skeleton Loader component
 * A premium, pulsing placeholder for loading states.
 * @param {string} className - Additional CSS classes for custom sizing
 */
const Skeleton = ({ className }) => {
  return (
    <div 
      className={`animate-pulse bg-surface-container-highest/30 rounded-lg ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        backgroundSize: '200% 100%',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, shimmer 2s infinite linear'
      }}
    />
  );
};

export default Skeleton;

/**
 * ProjectCardSkeleton
 * Specific skeleton for the project cards in the grid.
 */
export const ProjectCardSkeleton = () => (
  <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/5 flex flex-col h-full space-y-6">
    <div className="flex justify-between">
       <Skeleton className="h-3 w-24" />
       <Skeleton className="h-3 w-12" />
    </div>
    <Skeleton className="h-8 w-3/4" />
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16" />
      <Skeleton className="h-6 w-16" />
    </div>
    <Skeleton className="h-10 w-32 mt-4" />
  </div>
);

/**
 * ProjectDetailSkeleton
 * Specific skeleton for the full-page project detail view.
 */
export const ProjectDetailSkeleton = () => (
  <div className="min-h-screen bg-background p-6 lg:p-12 space-y-12">
    <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4 w-2/3">
             <Skeleton className="h-20 w-full" />
             <Skeleton className="h-6 w-3/4" />
          </div>
          <Skeleton className="h-48 w-64 rounded-3xl" />
        </div>
        <Skeleton className="h-[500px] w-full rounded-[2rem]" />
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
             <Skeleton className="h-32 w-full" />
             <Skeleton className="h-48 w-full" />
          </div>
          <div className="lg:col-span-4 space-y-6">
             <Skeleton className="h-48 w-full rounded-2xl" />
             <Skeleton className="h-64 w-full rounded-2xl" />
          </div>
        </div>
    </div>
  </div>
);
