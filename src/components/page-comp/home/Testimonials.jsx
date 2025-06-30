import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Johnson",
    review: "The best platform for finding and managing events. The interface is clean and the process is seamless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    review: "I hosted my first workshop using this platform and it was a massive success. The tools are intuitive and powerful.",
    rating: 5,
  },
  {
    name: "Chris Lee",
    review: "A fantastic way to discover local events. I've found so many great concerts and meetups I would have otherwise missed.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
  </div>
);

export default function Testimonials() {
  return (
    <section className="bg-light dark:bg-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">What Our Users Say</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Discover why so many choose us for their event needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white dark:bg-gray-dark p-6 rounded-lg shadow-lg">
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-gray-600 dark:text-gray-300">"{testimonial.review}"</p>
              <h4 className="mt-4 font-bold text-right">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 