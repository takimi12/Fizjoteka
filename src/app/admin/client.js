'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function AdminPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const logoutHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  const isAdmin = session?.user?.role === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      router.push('/');
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return null; // Możesz również zwrócić komunikat informujący użytkownika o braku dostępu
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          )}
          {session ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
