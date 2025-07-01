"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useUser } from "@/provider/UserProvider";
import { usePathname, useRouter } from "next/navigation";

export default function MainLayoutClient({ children }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { user, userLoading } = useUser();

  const privateRoutes = ["/events", "/my-events", "/add-event"];

  useEffect(() => {
    if (!userLoading && !user && privateRoutes.includes(pathname)) {
      router.push("/login");
    }
  }, [userLoading, user, pathname, router]);

  useEffect(() => {
    let scrollInstance;

    import("locomotive-scroll").then((LocomotiveScroll) => {
      scrollInstance = new LocomotiveScroll.default({
        el: containerRef.current,
        smooth: true,
      });

      // Optional: If you really need to force refresh on load:
      window.addEventListener("load", () => {
        // No update() in modern versions, scrollTo or start/stop available
        // console.log('Window loaded, LocomotiveScroll ready');
      });
    });

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={containerRef}>
      {children}
    </main>
  );
}
