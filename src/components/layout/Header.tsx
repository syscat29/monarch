import SignoutButton from "@/features/auth/components/SignoutButton";

export default function Header() {
  return (
    <header className="bg-neutral-950 border-b border-neutral-800 h-14 sticky top-0 z-50">
      <section className="flex items-center justify-between h-full">
        <div className="flex border-r border-neutral-800 w-64 h-full items-center px-4">
          <h1 className="uppercase font-bold text-sm">Monarch</h1>
        </div>
        <div className="px-4">
          <SignoutButton />
        </div>
      </section>
    </header>
  );
}
