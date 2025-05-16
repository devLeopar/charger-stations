'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import Image from "next/image"; // Removed unused import

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);

  // Render a loading state or null while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <p className="text-gray-700 dark:text-gray-300">Redirecting to dashboard...</p>
    </div>
  );
}
