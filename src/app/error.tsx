'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Something went wrong!</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">We&apos;re sorry for the inconvenience</h2>
          <p className="mt-4 text-gray-500">
            An error occurred while processing your request. Please try again later.
          </p>
          <div className="mt-8 space-x-4">
            <button
              onClick={reset}
              className="btn-secondary"
            >
              Try Again
            </button>
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 