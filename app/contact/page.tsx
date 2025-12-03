// "use client";

// import Header from "@/components/header";
// import SplitText from "@/components/SplitText";
// import SplashCursor from "@/components/SplashCursor";


// export default function Contact() {


//   return (

    
//     <div className="min-h-screen bg-black dark:bg-black text-white dark:text-white transition-colors duration-300">
//         <Header/>
//     <section className="container mx-auto px-6 pt-24 pb-16 text-center">
//         <SplashCursor />
// <SplitText
//   text="VARADHA RAJAN PERUMAL"
//   className="text-2xl font-semibold text-center"
//   delay={20}
//   duration={0.6}
//   ease="power3.out"
//   splitType="chars"
//   from={{ opacity: 0, y: 40 }}
//   to={{ opacity: 1, y: 0 }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="center"
 
// />
// <SplitText
//   text="9962715863"
//   className="text-2xl font-semibold text-center"
//   delay={20}
//   duration={0.6}
//   ease="power3.out"
//   splitType="chars"
//   from={{ opacity: 0, y: 40 }}
//   to={{ opacity: 1, y: 0 }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="center"
 
// />
// <SplitText
//   text="pvaradharajan98@gmail.com"
//   className="text-2xl font-semibold text-center"
//   delay={20}
//   duration={0.6}
//   ease="power3.out"
//   splitType="chars"
//   from={{ opacity: 0, y: 40 }}
//   to={{ opacity: 1, y: 0 }}
//   threshold={0.1}
//   rootMargin="-100px"
//   textAlign="center"
 
// />
//       </section>
//       </div>
//   );
// }


"use client";

import Header from "@/components/header";
import SplashCursor from "@/components/SplashCursor";
import FadeContent from "@/components/FadeContent";
import StarBorder from "@/components/StarBorder";

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

          {/* CTA Button */}
          {/* <div className="flex justify-center pt-2">
            <a
              href="mailto:varadharajanp.dev@gmail.com"
              className="px-6 py-3 text-md font-semibold border border-cyan-300 rounded-xl hover:bg-cyan-300 hover:text-black transition-all duration-300"
            >
              Send Email
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
