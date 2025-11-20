import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">
          App Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The application you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

