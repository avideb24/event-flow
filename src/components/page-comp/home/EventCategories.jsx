const categories = [
  { name: 'Concerts', image: 'https://i.ibb.co/cKLg03Cs/festival.png' },
  { name: 'Sports', image: '/images/cat-sports.jpg' },
  { name: 'Workshops', image: '/images/cat-workshops.jpg' },
  { name: 'Tech Talks', image: '/images/cat-techtalks.jpg' },
  { name: 'Festivals', image: 'https://i.ibb.co/1Y9nBqZg/concert.png' },
  { name: 'Exhibitions', image: 'https://i.ibb.co/wFBHkqvZ/Exhibitions.png' },
];

export default function EventCategories() {
  return (
    <section className="bg-light dark:bg-gray-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer rounded-lg shadow-lg overflow-hidden">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-white text-xl font-bold text-black text-center py-3">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 