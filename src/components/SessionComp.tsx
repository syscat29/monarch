"use client"

import { authClient } from '@/lib/auth-client'

export default function SessionComp() {
  const session = authClient.useSession()

  console.log(session)

  return (
    <div>
      <div>Something</div>
    </div>
  )
}