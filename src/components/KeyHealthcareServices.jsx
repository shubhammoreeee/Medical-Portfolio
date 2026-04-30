import { ChevronDown, Star, ArrowUpRight } from "lucide-react";

export default function KeyHealthcareServices() {
  return (
    <section id="doctors" className="w-full bg-[#f3f2f4] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="max-w-[420px] text-[38px] sm:text-[48px] font-normal leading-[0.95] tracking-[-0.05em] text-black md:text-[60px] lg:text-[58px] xl:text-[62px]">
              Our Key Healthcare Services
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-12">
            <p className="max-w-[520px] text-[20px] leading-[1.35] tracking-[-0.025em] text-[#232323]">
              Comprehensive medical services designed to keep you healthy, safe,
              and cared for.
            </p>
          </div>
        </div>

        {/* Top row */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.45fr_1.6fr_0.72fr]">
          {/* Welcome card */}
          <article className="relative min-h-[255px] overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#8da3ef_0%,#b8c6f4_100%)] p-7 md:col-span-2 lg:col-span-1">
            <div className="relative z-10 max-w-[250px]">
              <p className="text-[18px] font-medium tracking-[-0.03em] text-white/95">
                Welcome Back! PureMed
              </p>

              <h3 className="mt-4 text-[29px] font-normal leading-[1.05] tracking-[-0.045em] text-[#f7f2d8]">
                Check Your Health Regularly
              </h3>

              <button className="mt-8 rounded-full bg-[#f5f1e8] px-8 py-3 text-[18px] font-medium text-[#282828] shadow-sm">
                Check Now
              </button>
            </div>

            <img
              src="heart.png"
              alt="Medical heart illustration"
              className="absolute bottom-0 right-0 h-[300px] w-[250px] object-cover mix-blend-multiply"
            />
          </article>

          {/* Statistics card */}
          <article className="grid min-h-[255px] grid-cols-1 sm:grid-cols-[0.78fr_1.32fr] overflow-hidden rounded-[22px] bg-[#f6e8ee]">
            <div className="bg-[linear-gradient(180deg,#f26f8f_0%,#f39ab0_100%)] p-6 text-white">
              <h3 className="text-[21px] font-semibold tracking-[-0.03em]">
                Statistics
              </h3>

              <p className="mt-10 max-w-[175px] text-[16px] leading-[1.35] tracking-[-0.02em] text-white/90">
                Manage your health records, track wellness progress, and book
                doctor appointments instantly with our easy-to-use personal
                health dashboard
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1.15fr_0.72fr] gap-4 p-4">
              {/* Chart card */}
              <div className="rounded-[18px] bg-[#f9f6f3] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#2a2a2a]">
                    Report Cases
                  </span>
                  <button className="flex items-center gap-1 rounded-[8px] border border-[#e2dbe7] bg-white px-2 py-1 text-[10px] text-[#b5a8c7]">
                    This Month <ChevronDown className="h-3 w-3" />
                  </button>
                </div>

                <div className="relative h-[150px] rounded-[12px] bg-[linear-gradient(180deg,#faf8f7_0%,#f7f3f1_100%)]">
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 opacity-60">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="border border-[#ece7ef]" />
                    ))}
                  </div>

                  <div className="absolute left-3 top-8 rounded-[10px] bg-[#c8a7f1] px-3 py-2 text-center text-[9px] text-white shadow-sm">
                    Happiness
                    <br />
                    750 Cases
                  </div>

                  <svg
                    viewBox="0 0 240 150"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M20 122 C70 120, 95 116, 125 102 S185 74, 220 22"
                      stroke="#b9a1e8"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M22 125 C62 123, 96 122, 122 118 S175 105, 220 38"
                      stroke="#202020"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      fill="none"
                    />
                  </svg>

                  <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] text-[#9c9c9f]">
                    <span>0%</span>
                    <span>10%</span>
                    <span>20%</span>
                    <span>30%</span>
                    <span>40%</span>
                  </div>

                  <div className="absolute left-1 top-4 flex h-[125px] flex-col justify-between text-[10px] text-[#9c9c9f]">
                    <span>05</span>
                    <span>04</span>
                    <span>03</span>
                    <span>02</span>
                    <span>01</span>
                  </div>
                </div>
              </div>

              {/* Test mini card */}
              <div className="rounded-[18px] bg-[#f7efe9] p-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/36?img=32"
                    alt="Profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14px] font-medium leading-none text-[#2f2f2f]">
                      Hellis
                    </p>
                    <p className="mt-1 text-[10px] text-[#767676]">Manager</p>
                  </div>
                </div>

                <p className="mt-5 text-[13px] font-semibold leading-[1.25] text-[#232323]">
                  Kidney Function Test
                </p>

                <div className="mt-8 flex items-end gap-[10px]">
                  {[28, 20, 34, 24, 38, 27, 18].map((h, i) => (
                    <div
                      key={i}
                      className="w-[4px] rounded-full bg-[#6c47d9]"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Stay informed card */}
          <article className="relative min-h-[255px] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#ca98ef_0%,#a765e7_100%)] p-5">
            <button className="rounded-full bg-[#f7f4ef] px-5 py-3 text-[16px] font-medium text-[#2c2c2c]">
              Stay Informed
            </button>

            <div className="mt-12">
              <div className="text-[58px] font-medium leading-none tracking-[-0.05em] text-[#f8edcb]">
                90.5%
              </div>
              <p className="mt-5 max-w-[150px] text-[16px] leading-[1.35] text-[#f8efe0]">
                of our patients satisfaction levels and personalized care
              </p>
            </div>
          </article>
        </div>

        {/* Bottom row */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[0.82fr_1.42fr_1.12fr]">
          {/* Service bars */}
          <article className="min-h-[220px] rounded-[22px] bg-[#efefef] p-5">
            <h3 className="max-w-[190px] text-[18px] font-medium leading-[1.05] tracking-[-0.03em] text-[#2b2b2b]">
              Our Key Healthcare Services
            </h3>

            <div className="mt-7 flex items-end gap-6">
              {[
                ["#5a57c8", 66],
                ["#ceb1f6", 77],
                ["#5e53ba", 45],
                ["#d4baf7", 82],
                ["#5652b2", 60],
                ["#7a37f0", 75],
                ["#4e58cc", 28],
                ["#8d43f3", 55],
              ].map(([color, height], i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="h-[110px] w-[10px] rounded-full bg-[#d9d9d9]" />
                  <div
                    className="-mt-[110px] w-[10px] rounded-full"
                    style={{ height: `${height}px`, backgroundColor: color }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-[10px] text-[#5a5a5a]">
              <div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#5a57c8]" />
                  <span>GeneralCheckup</span>
                </div>
                <div className="mt-1 pl-3">92%</div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#ceb1f6]" />
                  <span>Dental Care</span>
                </div>
                <div className="mt-1 pl-3">85%</div>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#8d43f3]" />
                  <span>Mental Health</span>
                </div>
                <div className="mt-1 pl-3">88%</div>
              </div>
            </div>
          </article>

          {/* Doctor card */}
          <article className="relative min-h-[220px] overflow-hidden rounded-[22px] bg-[linear-gradient(90deg,#7d2df5_0%,#b27df6_100%)] p-5">
            <div className="relative z-10 max-w-[290px]">
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#f8f2eb]">
                Dr. Sarah Johnson
              </h3>

              <div className="mt-5 space-y-3 text-[16px] leading-none text-[#f3e7d9]">
                <p>
                  <span className="opacity-85">Specialization :</span>
                  <span className="ml-4">Cardiologist</span>
                </p>
                <p>
                  <span className="opacity-85">Experience :</span>
                  <span className="ml-8">12+ Years</span>
                </p>
                <p className="flex items-center">
                  <span className="opacity-85">Rating :</span>
                  <span className="ml-12">(4.9)</span>
                  <span className="ml-2 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#f7dc73] text-[#f7dc73]"
                      />
                    ))}
                  </span>
                </p>
              </div>

              <button className="mt-10 rounded-full bg-[#f5f0e8] px-7 py-4 text-[16px] font-medium text-[#272727] shadow-sm">
                Book an Appointment
              </button>
            </div>

            <img
              src="doctor.png"
              alt="Doctor"
              className="absolute bottom-0 right-0 h-[230px] w-[230px] object-cover"
            />
          </article>

          {/* Routine card */}
          <article className="grid min-h-[220px] grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-0 rounded-[22px] bg-[#f5f3f1] p-4 md:col-span-2 lg:col-span-1">
            <div className="rounded-[18px] bg-[#faf8f6] p-4">
              <div className="relative flex h-full flex-col items-center justify-between">
                <div className="relative mt-2 h-[110px] w-[110px] rounded-full border border-[#ccc6c2]">
                  <div className="absolute left-1/2 top-1/2 h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ccc6c2]" />
                  <div className="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ccc6c2]" />

                  {[
                    "left-[10px] top-[15px]",
                    "right-[10px] top-[15px]",
                    "left-[48px] top-[42px]",
                    "left-[4px] top-[55px]",
                    "right-[5px] top-[55px]",
                  ].map((pos, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/28?img=${i + 11}`}
                      alt="User"
                      className={`absolute h-6 w-6 rounded-full object-cover ${pos}`}
                    />
                  ))}
                </div>

                <p className="max-w-[120px] text-center text-[12px] leading-[1.25] text-[#262626]">
                  Feelmind offers trusted health and wellness solutions
                </p>

                <button className="rounded-full border border-[#202020] px-4 py-2 text-[10px] font-medium text-[#202020]">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between px-4 py-2">
              <p className="text-[16px] font-medium tracking-[-0.03em] text-[#232323]">
                Welcome Back! PureMed
              </p>

              <h3 className="max-w-[220px] text-[27px] font-normal leading-[1.02] tracking-[-0.04em] text-[#171717]">
                Stay proactive with routine health checkups
              </h3>

              <button className="w-fit text-[15px] font-medium text-[#1e1e1e]">
                Book an Appointment
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}