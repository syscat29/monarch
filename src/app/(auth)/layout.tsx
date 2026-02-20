import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Readonly<LayoutProps>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-2 min-h-screen bg-neutral-950">
      <div className="p-8 bg-neutral-900 flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-6">
          <div className="bg-white/5 size-42" />
          <div className="bg-white/10 size-42" />
          <div className="bg-white/5 size-42" />
          <div className="bg-white/10 size-42" />
          <div className="bg-white/5 size-42" />
          <div className="bg-white/10 size-42" />
          <div className="bg-white/5 size-42" />
          <div className="bg-white/10 size-42" />
          <div className="bg-white/5 size-42" />
        </div>
      </div>
      <div className="p-8 flex flex-col">
        <h1 className="font-bold text-lg uppercase">Monarch</h1>
        {children}
      </div>
    </div>
  );
}
