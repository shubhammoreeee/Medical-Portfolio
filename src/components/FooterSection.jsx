import {
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer id="blog" className="w-full bg-[#0b0b14] text-white">
      <div className="mx-auto max-w-[1210px] px-4 pb-6 pt-12 md:px-6">
        {/* Top area */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_1.1fr_0.7fr_1fr] lg:gap-x-10">
          
          {/* Left large block */}
          <div>
            <h2 className="max-w-[330px] text-[39px] font-normal leading-[1.05] tracking-[-0.045em] text-[#f4f4f6]">
              Helping people live more independently
            </h2>

            <div className="mt-8 flex items-center gap-4 text-[#f1f1f3]">
              <a href="#" className="opacity-90 transition hover:opacity-100">
                <FaLinkedinIn className="h-[18px] w-[18px]" />
              </a>
              <a href="#" className="opacity-90 transition hover:opacity-100">
                <FaInstagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#" className="opacity-90 transition hover:opacity-100">
                <FaGlobe className="h-[18px] w-[18px]" />
              </a>
              <a href="#" className="opacity-90 transition hover:opacity-100">
                <FaTwitter className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="text-[16px] font-normal text-[#cfcfd6]">
              Office Address
            </p>

            <div className="mt-4 max-w-[250px] text-[17px] leading-[1.25] tracking-[-0.02em] text-[#f4f4f6]">
              <p>Feelmind Healthcare Solutions</p>
              <p>House #12, Road #5,</p>
              <p>Gulshan-2, Dhaka 1212,</p>
              <p>Bangladesh</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[16px] font-normal text-[#cfcfd6]">
              Quick Links
            </p>

            <nav className="mt-4 flex flex-col gap-[9px]">
              {["About Us", "Services", "Doctors", "Appointments", "Blog"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[17px] leading-[1.2] tracking-[-0.02em] text-[#f4f4f6] transition hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div>
              <p className="text-[16px] font-normal text-[#cfcfd6]">Email</p>
              <a
                href="mailto:info@feelmind.com"
                className="mt-4 block text-[25px] font-normal tracking-[-0.03em] text-[#f6f6f7]"
              >
                info@feelmind.com
              </a>
            </div>

            <div className="mt-8">
              <p className="text-[16px] font-normal text-[#cfcfd6]">Phone</p>
              <a
                href="tel:+12395550108000"
                className="mt-4 block text-[25px] font-normal tracking-[-0.03em] text-[#f6f6f7]"
              >
                (239) 555-0108 000
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/20" />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 pt-5 text-[15px] text-[#d7d7db] md:flex-row md:items-center md:justify-between">
          <p>@copyright 2025. All Rights Reserved</p>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms & Condition
            </a>
            <a href="#" className="transition hover:text-white">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}