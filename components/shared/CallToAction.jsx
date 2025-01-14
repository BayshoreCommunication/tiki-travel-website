import Image from "next/image";
import RippleButton from "./RippleButton";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const CallToAction = () => {
  return (
    <section className="relative w-full">
      <Image
        className="absolute inset-0 object-cover bg-center w-full h-full"
        width={1920}
        height={700}
        src="/assets/homepage/call-to-action1.png"
        alt="Header background"
      />
      <div className="container py-8 md:py-10 ">
        <div className="relative z-30 flex flex-col justify-center items-center gap-3 lg:gap-10 text-white p-6 lg:px-20 lg:py-24 ">
          <ScrollMotionEffect effect="fade-up" duration="1000">
            <h4 className="text-3xl md:text-5xl font-semibold text-center leading-tight max-w-[1024px] mx-auto">
              Pack your bags and get ready for an unforgettable adventure!
            </h4>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="1500">
            <RippleButton
              buttonText="Lets Plan a Vacation"
              href="https://calendly.com/espinosa-april/30min?month=2025-01"
              target="_blank"
            />
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
