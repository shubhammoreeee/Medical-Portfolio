import { ArrowUpRight, Stethoscope, CalendarDays } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#f3f2f4] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex items-start gap-3">
              <div className="pt-8 text-black">
                <Stethoscope className="h-9 w-9 stroke-[1.7]" />
              </div>

              <h2 className="max-w-[650px] text-[36px] sm:text-[42px] font-normal leading-[0.98] tracking-[-0.045em] text-black md:text-[58px] lg:text-[62px]">
                Explore Our Range Of
                <br />
                Healthcare Services
              </h2>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-6">
            <p className="max-w-[470px] text-[17px] sm:text-[19px] leading-[1.45] tracking-[-0.02em] text-[#242424]">
              <span className="text-[#c83a2c]">
                Discover comprehensive healthcare
              </span>{" "}
              solutions tailored to your needs, including preventive care,
              advanced treatments, and personalized support for a healthier,
              happier life every day.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="relative flex min-h-[418px] flex-col rounded-[24px] bg-[#f8f8f8] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://cdn.prod.website-files.com/64a2d783402b37eb38674016/69ae8027288fb5f9c807687b_Counselling%20vs%20Therapy.png"
                alt="Mental health services"
                className="h-[175px] w-full rounded-[28px] object-cover"
              />
            </div>

            <div className="pt-7">
              <h3 className="text-[27px] font-normal leading-[1.05] tracking-[-0.03em] text-[#1f1f1f]">
                Mental Health Services
              </h3>

              <p className="mt-5 max-w-[290px] text-[16px] leading-[1.45] tracking-[-0.02em] text-[#5e5e62]">
                Compassionate care and expert support to help you achieve
                emotional balance, mental clarity, and lasting well-being.
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8">
              <button className="text-[16px] font-medium text-[#2a2a2a]">
                Learn More
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f1f1] text-[#2a2a2a]">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </article>

          {/* Card 2 */}
          <article className="relative flex min-h-[418px] flex-col rounded-[24px] bg-[#b88eed] p-5 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-sm">
              <img
                src="https://www.shutterstock.com/image-photo/portrait-handsome-hispanic-male-doctor-600nw-2608441611.jpg"
                alt="Doctor profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="text-[13px] text-[#8a8a90]">Cardiology</div>
                <div className="text-[18px] font-medium text-[#2b2b2f]">
                  Dr. Wahidul Islam
                </div>
              </div>
            </div>

            <div className="mt-auto pt-16">
              <h3 className="max-w-[280px] text-[28px] font-normal leading-[1.08] tracking-[-0.03em] text-white">
                Meet Our Expert Doctors
              </h3>

              <p className="mt-5 max-w-[300px] text-[16px] leading-[1.45] tracking-[-0.02em] text-white/90">
                Get to know our highly qualified doctors committed to providing
                personalized care and expert medical guidance for every patient.
              </p>

              <button className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-4 text-[16px] font-medium text-[#2a2a2a] shadow-sm">
                Book an Appointment
              </button>
            </div>
          </article>

          {/* Card 3 */}
          <article className="relative flex min-h-[418px] flex-col rounded-[24px] bg-[#f8f8f8] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHNr4jS012ZSe6a8A4domlOm7nsJvTdskIA&s"
                alt="Individual counseling"
                className="h-[175px] w-full rounded-[28px] object-cover"
              />
            </div>

            <div className="pt-7">
              <h3 className="text-[27px] font-normal leading-[1.05] tracking-[-0.03em] text-[#1f1f1f]">
                Individual Counseling
              </h3>

              <p className="mt-5 max-w-[290px] text-[16px] leading-[1.45] tracking-[-0.02em] text-[#5e5e62]">
                Personalized one-on-one counseling sessions designed to address
                your unique emotional challenges.
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8">
              <button className="text-[16px] font-medium text-[#2a2a2a]">
                Learn More
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f1f1] text-[#2a2a2a]">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}