import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: Readonly<LayoutProps>) {
  const session = auth.api.getSession;

  if (!session || session === null) {
    redirect("/auth/signin");
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
