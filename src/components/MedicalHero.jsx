import React from "react";
import {
  Bell,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

export default function MedicalHero() {
  return (
    <section id="home" className="min-h-screen bg-[#f6f4f7] p-4 md:p-6">
      <div className="relative overflow-hidden rounded-[32px] border border-black/5 bg-[#f7f5f7] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 72% 24%, rgba(255,245,210,0.95) 0%, rgba(255,245,210,0.65) 12%, rgba(255,245,210,0) 28%),
                radial-gradient(circle at 82% 58%, rgba(255,128,64,0.55) 0%, rgba(255,128,64,0.22) 18%, rgba(255,128,64,0) 38%),
                radial-gradient(circle at 96% 90%, rgba(126,92,255,0.72) 0%, rgba(126,92,255,0.34) 16%, rgba(126,92,255,0) 34%),
                radial-gradient(circle at 100% 18%, rgba(255,120,170,0.55) 0%, rgba(255,120,170,0.2) 15%, rgba(255,120,170,0) 32%),
                linear-gradient(90deg, #f7f5f7 0%, #f7f5f7 52%, #fff5df 68%, #ffb07f 84%, #ef6a67 94%, #8f75ff 100%)
              `,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Navbar */}
          <header className="flex items-center justify-between px-6 pt-6 md:px-8 md:pt-7 lg:px-8">
            <div className="text-[28px] font-black italic tracking-tight text-black">
              PUREMED+
            </div>

            <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about-us" },
                { name: "Services", id: "services" },
                { name: "Doctors", id: "doctors" },
                { name: "Appointments", id: "appointments" },
                { name: "Blog", id: "blog" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`relative pb-1 transition-colors hover:text-black ${
                    item.name === "Home" ? "text-black" : "text-black/60"
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full ${
                    item.name === "Home" ? "after:w-full" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black shadow-sm ring-1 ring-black/10 md:inline-flex">
                Contact Us
              </button>

              <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-sm ring-1 ring-black/10">
                <Bell className="h-[18px] w-[18px]" strokeWidth={2} />
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div className="grid grid-cols-1 gap-10 px-6 pb-8 pt-10 md:px-8 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-9">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[16px] font-medium text-black shadow-sm ring-1 ring-black/10 backdrop-blur-sm">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                  <Stethoscope className="h-4 w-4" strokeWidth={2.2} />
                </span>
                Expert Doctors
              </div>

              <h1 className="max-w-[700px] text-[34px] sm:text-[46px] font-normal leading-[0.98] tracking-[-0.04em] text-black md:text-[72px] lg:text-[66px] xl:text-[72px]">
                Our Mission Delivering Compassionate, Patient-Centered Care
              </h1>

              <div className="mt-10 overflow-hidden rounded-[26px] bg-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/5 backdrop-blur-sm max-w-[650px]">
                <img
                  src="https://www.medacces.ro/wp-content/uploads/2024/11/PNEUMONIE-MEDACCES.jpg"
                  alt="Doctor consulting a patient"
                  className="h-[250px] w-full object-cover grayscale md:h-[320px]"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col lg:col-span-5 lg:pl-6">
              <p className="max-w-[470px] pt-2 text-[18px] leading-[1.5] text-black/80 lg:mt-24">
                We strive to provide exceptional healthcare by focusing on
                compassion, innovation, and patient well-being — ensuring
                personalized care that empowers healthier lives and builds trust
                every step of the way.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button className="rounded-full bg-black px-8 py-4 text-[18px] font-medium text-white shadow-lg">
                  Book an Appointment
                </button>

                <a
                  href="#"
                  className="text-[18px] font-medium text-black underline underline-offset-4"
                >
                  Find a Doctor
                </a>
              </div>

              <div className="mt-12 lg:mt-auto lg:flex lg:justify-end">
                <div className="flex items-start gap-4">
                  <div className="w-[240px] rounded-[22px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                    <div className="mb-4 flex items-center">
                      <div className="flex -space-x-2">
                        <img
                          src="https://i.pravatar.cc/40?img=12"
                          alt="Doctor profile"
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="https://i.pravatar.cc/40?img=32"
                          alt="Doctor profile"
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="https://i.pravatar.cc/40?img=45"
                          alt="Doctor profile"
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                        />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#8b4dff] text-[18px] font-semibold text-white">
                          2K
                        </div>
                      </div>
                    </div>

                    <p className="text-[16px] leading-[1.35] text-black/70">
                      More than 2+ Doctors in your door
                    </p>
                  </div>

                  <button className="flex h-[66px] w-[92px] items-center justify-center rounded-[18px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                    <ArrowUpRight className="h-6 w-6 text-black" strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/30" />
      </div>
    </section>
  );
}