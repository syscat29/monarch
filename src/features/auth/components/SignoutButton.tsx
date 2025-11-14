"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess() {
          router.refresh();
        },
      },
    });
  }

  return <button onClick={handleLogout}>Sign Out</button>;
}
