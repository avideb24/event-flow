import React from "react";
import Hero from '../components/page-comp/home/Hero';
import EventCategories from '../components/page-comp/home/EventCategories';
import Testimonials from '../components/page-comp/home/Testimonials';
import CTA from '../components/page-comp/home/CTA';
import EventList from '../components/page-comp/home/EventList';

export default function HomePage() {
  return (
    <main className="bg-light dark:bg-dark">
      <Hero />
      <EventCategories />
      <EventList />
      <Testimonials />
      <CTA />
    </main>
  );
}