import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

export function useUser(): typeof authClient.$Infer.Session.user | null {
  const { data, error } = authClient.useSession();

  if (error != null) return null;

  if (data == null) {
    redirect('/auth/signin');
  }

  const { user } = data;

  return user;
}
