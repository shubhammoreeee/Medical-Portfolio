import React, { useState, useEffect, useRef, Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="about-us" className="relative min-h-screen w-full overflow-hidden bg-[#f3f2f4]" ref={containerRef}>
      <div className="relative mx-auto h-full w-full max-w-[1280px]">
        {/* Top content */}
        <div className="relative z-20 px-4 sm:px-8 pt-16 md:px-14 lg:px-16 lg:pt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left badge */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[10px] w-[10px] rounded-full bg-[#d71f14]" />
                <p className="text-[17px] font-medium tracking-[-0.02em] text-[#cf2b1f]">
                  Easy Access to Trusted Medicines
                </p>
              </div>
            </div>

            {/* Right text */}
            <div className="lg:col-span-7">
              <p className="max-w-[760px] text-[16px] leading-[1.42] tracking-[-0.035em] text-[#5c5c61] md:text-[18px] lg:text-[18px] xl:text-[20px]">
                Welcome to Care By Dr.
                <br />
                Your health and well-being are our highest priority.
                <br />
                Our dedicated team of specialists is committed to delivering
                exceptional care across a wide range of medical services —
                ensuring you receive the support, expertise, and attention you
                deserve.
              </p>
            </div>
          </div>
        </div>

        {/* Background text */}
        <div className="pointer-events-none absolute inset-x-0 top-[57%] z-0 -translate-y-1/2 overflow-hidden">
          <h1 className="whitespace-nowrap text-center text-[72px] sm:text-[108px] font-black italic uppercase leading-none tracking-[-0.07em] text-[#e8e5e8] md:text-[145px] lg:text-[168px] xl:text-[182px]">
            MEDICAI CAPSULE
          </h1>
        </div>

        {/* Spline 3D object */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-[500px] w-full max-w-[900px] md:h-[700px] lg:h-[800px]">
            {/* Mobile: Use CSS to scale it heavily or hide on extremely low end, but here we just optimize scale */}
            <div className="absolute inset-0 scale-[0.45] sm:scale-[0.55] md:scale-60 -translate-y-10 md:translate-y-0">
              {isInView ? (
                <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-[#5c5c61]">Loading 3D Model...</div>}>
                  <Spline
                    scene="https://prod.spline.design/Jw2ThRl0pWgbYoZu/scene.splinecode"
                    style={{ background: 'transparent', pointerEvents: 'none' }}
                  />
                </Suspense>
              ) : null}
            </div>
          </div>
        </div>

        {/* Footer section (under capsule) */}
        <div className="relative z-20 pb-10 pt-[380px] sm:pt-[420px] md:pt-[520px] lg:pt-[600px]">
          <div className="px-4 sm:px-8 md:px-14 lg:px-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left - heading */}
              <div>
                <h2 className="text-[32px] sm:text-[36px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1a1a1d] md:text-[48px] lg:text-[52px]">
                  Streamline Your
                  <br />
                  Health Care
                </h2>
                <p className="max-w-[620px] text-[16px] leading-[1.5] tracking-[-0.02em] text-[#5c5c61] md:text-[17px] lg:text-[18px]">
                  Enjoy hassle-free healthcare with fast, convenient prescription
                  ordering and dependable delivery — so you get the medications
                  you need, right on time and without the stress.
                </p>
              </div>

              {/* Right - text + CTA */}
              <div className="flex flex-row items-center justify-start lg:justify-end gap-8 mt-6 lg:mt-0">
                <div className="flex items-center justify-start lg:justify-center">
                  <button className="rounded-full bg-[#1a1a1d] px-8 py-4 text-[16px] font-semibold text-white shadow-lg transition-all hover:bg-[#2d2d30] md:text-[17px]">
                    More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}