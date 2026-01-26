'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <div className="size-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
          <AlertTriangle size={32} className="text-red-500" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        We encountered an error while loading this page. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-indigo-600 font-medium hover:bg-indigo-500 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
