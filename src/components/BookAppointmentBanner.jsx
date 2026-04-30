export default function BookAppointmentBanner() {
  return (
    <section id="appointments" className="w-full bg-[#f3f2f4] px-4 py-12 md:px-6">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[#f4e7ec]">
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 18% 14%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.15) 18%, rgba(255,255,255,0) 34%),
                radial-gradient(circle at 57% 14%, rgba(255,210,230,0.72) 0%, rgba(255,210,230,0.28) 18%, rgba(255,210,230,0) 38%),
                radial-gradient(circle at 96% 8%, rgba(139,125,255,0.80) 0%, rgba(139,125,255,0.20) 22%, rgba(139,125,255,0) 38%),
                radial-gradient(circle at 74% 84%, rgba(255,146,89,0.88) 0%, rgba(255,146,89,0.45) 22%, rgba(255,146,89,0) 44%),
                linear-gradient(120deg, #f6edf0 0%, #f4d8e3 18%, #d9b4f0 46%, #f08c73 77%, #f6aa60 100%)
              `,
            }}
          />

          <div className="relative z-10 grid min-h-[420px] grid-cols-1 items-center lg:grid-cols-[1.05fr_1.15fr]">
            {/* Left side */}
            <div className="relative flex h-full items-end pl-0 pt-8 lg:pt-0">
              <div className="relative ml-0 w-full lg:w-[95%] max-w-[530px] lg:-mb-8 overflow-x-auto pb-4 hide-scrollbar">
                <div className="min-w-[480px] px-2 sm:px-0">
                  {/* Laptop / dashboard frame */}
                  <div className="overflow-hidden rounded-t-[18px] rounded-b-none border-[6px] border-black bg-white shadow-[0_18px_30px_rgba(0,0,0,0.10)]">
                  <div className="h-[355px] w-full bg-[#fafafa]">
                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-[#ececec] px-5 py-4">
                      <div className="text-[11px] font-semibold text-[#232323]">
                        Patient Details
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[8px] text-[#7f7f7f]">
                          Last updated on 06-01-2021
                        </span>
                        <button className="rounded-full bg-[#111111] px-3 py-1 text-[8px] font-medium text-white">
                          Schedule a Visit
                        </button>
                      </div>
                    </div>

                    {/* Main layout */}
                    <div className="grid h-[calc(100%-49px)] grid-cols-[0.24fr_0.46fr_0.30fr] gap-2 p-3">
                      {/* Left stats */}
                      <div className="space-y-2">
                        <div className="rounded-[10px] bg-white p-3 shadow-sm">
                          <div className="h-3 w-16 rounded bg-[#efefef]" />
                          <div className="mt-6 space-y-3">
                            {[
                              ["Heart Rate", "74 bpm"],
                              ["Blood Count", "80-90"],
                              ["Cholesterol", "225 ml"],
                              ["Blood Glucose Level", "85 mg/dl"],
                              ["Formulation", "83"],
                            ].map(([label, value]) => (
                              <div key={label}>
                                <div className="text-[7px] text-[#969696]">{label}</div>
                                <div className="mt-1 text-[10px] font-semibold text-[#222]">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Center panel */}
                      <div className="space-y-2">
                        <div className="rounded-[10px] bg-white p-3 shadow-sm">
                          <div className="flex items-start gap-3">
                            <div className="h-11 w-11 rounded-full bg-[linear-gradient(135deg,#f2d1bb,#b8c18b)]" />
                            <div className="flex-1">
                              <div className="text-[11px] font-semibold text-[#232323]">
                                Jacqueline Delaney
                              </div>
                              <div className="text-[8px] text-[#818181]">
                                Female (30 years)
                              </div>
                              <div className="mt-2 flex gap-2">
                                <div className="h-5 w-5 rounded bg-[#5fcb69]" />
                                <div className="h-5 w-5 rounded bg-[#efefef]" />
                                <div className="h-5 w-14 rounded bg-[#efefef]" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[10px] bg-white p-3 shadow-sm">
                          <div className="flex h-[190px] items-center justify-center">
                            <div className="relative h-[150px] w-[110px]">
                              <div className="absolute inset-0 rounded-[45%] bg-[radial-gradient(circle_at_40%_30%,#ffd7e2_0%,#f6abc2_30%,#eb6e8f_65%,#d6466b_100%)]" />
                              <div className="absolute left-[18px] top-[-10px] h-16 w-7 rotate-[-18deg] rounded-full bg-[linear-gradient(180deg,#ffd9e1,#ea557d)]" />
                              <div className="absolute right-[16px] top-[-12px] h-16 w-7 rotate-[24deg] rounded-full bg-[linear-gradient(180deg,#ffd9e1,#ea557d)]" />
                              <div className="absolute left-[42px] top-[-18px] h-16 w-7 rounded-full bg-[linear-gradient(180deg,#ffe7ed,#d93961)]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className="space-y-2">
                        <div className="rounded-[10px] bg-white p-3 shadow-sm">
                          <div className="text-[8px] text-[#777]">Blood Sugar</div>
                          <div className="mt-4 flex items-center justify-center">
                            <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border-[7px] border-[#f1e7a8]">
                              <div className="text-center">
                                <div className="text-[16px] font-semibold text-[#222]">126</div>
                                <div className="text-[8px] text-[#666]">mg/dl</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[10px] bg-white p-3 shadow-sm">
                          <div className="text-[8px] text-[#777]">Vital Signs</div>
                          <div className="mt-3 space-y-3">
                            {[
                              ["Blood Pressure", "120 / 80 mmHg"],
                              ["Body Temperature", "36.6 c"],
                              ["Oxygen Saturation (SpO2)", "97 %"],
                            ].map(([label, value]) => (
                              <div key={label}>
                                <div className="text-[7px] text-[#9a9a9a]">{label}</div>
                                <div className="mt-1 text-[9px] font-semibold text-[#222]">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom laptop chin */}
                <div className="relative mx-auto h-4 w-[82%] rounded-b-[40px] bg-black">
                  <div className="absolute left-1/2 top-1/2 h-3 w-20 -translate-x-1/2 -translate-y-1/2 rounded-b-[16px] bg-[#2e2e2e]" />
                </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="px-7 py-10 md:px-10 lg:px-12 xl:px-14">
              <div className="max-w-[560px]">
                <h2 className="text-[32px] sm:text-[42px] font-normal leading-[0.98] tracking-[-0.055em] text-white md:text-[58px] lg:text-[62px] xl:text-[66px]">
                  Improving wellness with frequency technology
                </h2>

                <p className="mt-6 max-w-[520px] text-[18px] leading-[1.45] tracking-[-0.02em] text-white/88 md:text-[20px]">
                  Using advanced frequency programs to support relaxation, balance, and better living.
                </p>

                <button className="mt-10 rounded-full bg-white px-9 py-4 text-[18px] font-medium text-[#222222] shadow-[0_10px_24px_rgba(255,255,255,0.12)]">
                  Book Your Frequency Scan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}