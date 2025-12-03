// "use client"
// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/header";

// export default function Portfolio() {
//   return (
    
//     <div className="min-h-screen bg-black dark:bg-black text-white dark:text-white transition-colors duration-300">

//       <Header/>
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 pt-24 pb-16 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-bold"
//         >
//           Hi, I'm <span className="text-purple-500">VARADHA RAJAN PERUMAL</span>
//         </motion.h1>
//         <p className="mt-4 text-lg max-w-2xl mx-auto opacity-80">
//           Full Stack Developer specializing in building high-performance web apps
//           with modern technologies.
//         </p>
//         <div className="mt-6 flex gap-4 justify-center">
//           <Button className="px-6 py-3 text-lg rounded-xl bg-purple-600 hover:bg-purple-700">
//             <a href="/resume.pdf" download>
//               Download Resume
//             </a>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SplashCursor from "@/components/SplashCursor";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header />
    <SplashCursor />
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ff2,#000)] opacity-30 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              VARADHA RAJAN PERUMAL
            </span>
          </h1>

          <p className="mt-5 text-lg opacity-80 leading-relaxed">
            Full Stack Developer specializing in building modern, scalable, and
            high-performance applications using JavaScript, TypeScript, React.js,
            Next.js, Node.js, PostgreSQL, and MongoDB.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <Button
              className="px-6 py-3 text-lg rounded-xl bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_10px_#06b6d4] hover:shadow-[0_0_20px_#06b6d4] transition-all"
            >
              <a href="varadha_rajan.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side Animation (Lottie Placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block w-[420px] h-[420px]"
        >
          <div className="w-full h-full 0 bg-black/40 backdrop-blur-md flex items-center justify-center">
            {/* Replace with Lottie */}
            <DotLottieReact
      src="Background looping animation.lottie"
      loop
      autoplay
    /> 
          </div>
        </motion.div>
      </section>
    </div>
  );
}
