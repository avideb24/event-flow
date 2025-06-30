import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MainLayoutClient from "@/components/layout/MainLayoutClient";

export const metadata = {
  title: "Event Flow",
  description: "Your site description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-light dark:bg-dark text-dark dark:text-light text-sm md:text-base font-normal">
        <Navbar />
        <MainLayoutClient>
          {children}
        </MainLayoutClient>
        <Footer />
      </body>
    </html>
  );
}
