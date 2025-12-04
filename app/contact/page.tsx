"use client";

import Header from "@/components/header";
import SplashCursor from "@/components/SplashCursor";
import FadeContent from "@/components/FadeContent";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      <Header />

      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        
        <SplashCursor />
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-10 tracking-widest">
          CONTACT ME
        </h1>
        </FadeContent>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_20px_rgba(0,255,255,0.3)] rounded-2xl p-10 w-full max-w-2xl space-y-6">

          {/* Name */}
          <div className="text-center">
            <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
            <h2 className="text-2xl font-bold">Varadharajan P</h2>
            <p className="text-cyan-300 font-semibold tracking-wide">Full Stack Developer</p>
            </FadeContent>
          </div>

          <div className="w-full h-[1px] bg-cyan-400/40"></div>

          {/* Contact Details */}
          <div className="space-y-4 text-center">
            <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
            <p className="text-lg">
              📞 <span className="text-cyan-300 font-medium">+91 9962715863</span>
            </p>
            <p className="text-lg">
              📧{" "}
              <span className="text-cyan-300 font-medium">
                pvaradharajan98@gmail.com
              </span>
            </p>
            </FadeContent>
          </div>

        </div>
      </section>
    </div>
  );
}
