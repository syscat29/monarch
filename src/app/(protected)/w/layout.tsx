import Sidebar from "@/features/workspaces/components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function WorkspaceLayout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="flex flex-row flex-1">
      <Sidebar />
      <div className="ml-64 p-4 flex-1 flex flex-col">{children}</div>
    </div>
  );
}
