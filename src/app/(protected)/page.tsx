import SessionComp from '@/components/SessionComp'

export default function HomePage() {
  return (
    <section className='p-8 flex flex-col'>
      <div>
        <h1 className='font-bold text-lg'>Workspaces</h1>
        <p className='text-sm'>Please select a workspace or create one</p>
      </div>

      <SessionComp />
    </section>
  );
}
