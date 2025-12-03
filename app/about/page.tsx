// "use client";

// import Header from "@/components/header";
// import SplitText from "@/components/SplitText";


// export default function About() {


//   return (

//     <div className="min-h-screen bg-black dark:bg-black text-white dark:text-white transition-colors duration-300">
//         <Header/>
//     <section className="container mx-auto px-6 pt-24 pb-16 text-center">
        
// <SplitText
//   text="Full Stack Developer with 3+ years of experience in designing, developing, and deploying scalable web
// applications using JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, PostgreSQL, and
// MongoDB. Skilled in building modern, responsive, and high-performance solutions with strong proficiency
// in REST APIs and authentication. Experienced in developing payment gateway , loan and property
// management systems with optimized user experience and seamless backend integration. Proven ability to
// work across the full software development lifecycle from requirement analysis to production deployment,
// collaborating with cross-functional teams and applying Agile methodologies. Passionate about writing
// clean, reusable code, improving performance, and solving complex technical challenges.
// "
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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SplashCursor from "@/components/SplashCursor";



export default function About() {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      
      <Header />
{/* <DotLottieReact
      src="Background looping animation.lottie"
      loop
      autoplay
    /> */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <SplashCursor />
        {/* LEFT SECTION */}
        <div className="space-y-6 animate-fadeInLeft">
          <h2 className="text-4xl font-extrabold text-cyan-400 tracking-widest mb-4">
            ABOUT ME
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Full Stack Developer with <span className="text-cyan-300 font-semibold">3+ years of experience</span> in designing,
            developing, and deploying scalable web applications using JavaScript, TypeScript, React.js,
            Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Skilled in building modern, responsive, and high-performance solutions with strong proficiency in
            <span className="text-cyan-300 font-semibold"> REST APIs and authentication</span>. Experienced in developing payment gateway,
            loan and property management systems with optimized user experience and backend integration.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about <span className="text-cyan-300 font-semibold">clean code, scalable architecture,</span> and solving complex
            technical challenges using modern engineering practices.
          </p>
        </div>

        {/* RIGHT SIDE ANIMATION BOX */}
        <div className="flex justify-center items-center animate-fadeInRight">
          <div
            className="w-[350px] h-[350px] 
              
              flex items-center justify-center"
          >
            {/* Place animation component here */}
            <DotLottieReact
      src="developer skills.lottie"
       loop
       autoplay
     />
          </div>
        </div>

      </section>
      
    </div>
  );
}

// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const App = () => {
//   return (
//     <DotLottieReact
//       src="path/to/animation.lottie"
//       loop
//       autoplay
//     />
//   );
// };