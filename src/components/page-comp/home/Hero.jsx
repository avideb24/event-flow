import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white py-24 px-4" style={{ backgroundImage: "url('/images/stadium-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Host & Discover Unforgettable Events</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">From concerts to conferences, find your next great experience or create your own with seamless tools.</p>
          <Link href="/events" className="inline-block px-8 py-3 rounded bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-transform transform hover:scale-105 shadow-lg">
            Explore Events
          </Link>
        </div>
        
        {/* Image/Graphic on the right */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="/images/event-pass-mockup.png" alt="Event Pass" className="w-3/4 md:w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
} 