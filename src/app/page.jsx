import React from "react";
import Hero from '../components/page-comp/home/Hero';
import EventCategories from '../components/page-comp/home/EventCategories';
import Testimonials from '../components/page-comp/home/Testimonials';
import CTA from '../components/page-comp/home/CTA';

export default function HomePage() {
  return (
    <main className="bg-light dark:bg-dark">
      <Hero />
      <EventCategories />
      <Testimonials />
      <CTA />
    </main>
  );
}