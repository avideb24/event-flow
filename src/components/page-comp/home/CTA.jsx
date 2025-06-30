import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Host your first event with us today.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="/add-event" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 