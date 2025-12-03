"use client";

import Header from "@/components/header";
import ElectricBorder from "@/components/ElectricBorder";
import FadeContent from "@/components/FadeContent";
import DarkVeil from "@/components/DarkVeil";
import SplashCursor from "@/components/SplashCursor";

export default function skills() {

  type Skill = {
  name: string;
  logo: string;
};




const skills: Skill[] = [
  { name: "JavaScript", logo: "assets/javascript-original.svg" },
  { name: "TypeScript", logo: "assets/typescript-original.svg" },
  { name: "React", logo: "assets/react-original.svg" },
  { name: "Next.js", logo: "assets/nextjs-original.svg" },
   { name: "Node.js", logo: "assets/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "assets/tailwindcss-original.svg" },
  { name: "Supabase", logo: "assets/supabase-original.svg" },
  { name: "Mongodb", logo: "assets/mongodb-original.svg" },
  { name: "Postgresql", logo: "assets/postgresql-original.svg" },
  { name: "VScode", logo: "assets/vscode-original.svg" },
  { name: "Html5", logo: "assets/html5-original.svg" },
  { name: "Css3", logo: "assets/css3-original.svg" },
  { name: "Git", logo: "assets/git-original.svg" },
  { name: "Github", logo: "assets/github-original.svg" },
];

  return (

//  <div className="relative min-h-screen bg-black text-white overflow-hidden">

//        <div className="absolute inset-0 -z-10" >
//     <DarkVeil />
//   </div>
      

//       <Header />

//       <ElectricBorder
//         color="#7df9ff"
//         speed={0.5}
//         chaos={0.2}
//         thickness={2}
//         style={{ borderRadius: 16 }}
//         className="p-6 bg-gray-900 shadow-lg max-w-4xl mx-auto mt-10"
//       >

//         <div className="mt-5">
//           <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>

//           <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//               {skills.map((skill) => (
//                 <div key={skill.name} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
//                   <img src={skill.logo} alt={skill.name} className="w-14 h-14 object-contain" />
//                   <p className="text-sm font-medium">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </FadeContent>

//         </div>
//       </ElectricBorder>
//     </div> 


<div className="relative min-h-screen  text-white overflow-hidden">
  {/* --- Background Effect --- */}
  <SplashCursor />
    <div className="absolute inset-0 -z-10">
    <DarkVeil />
  </div>
  

  <Header />

  <ElectricBorder
    color="#7df9ff"
    speed={0.5}
    chaos={0.2}
    thickness={2}
    style={{ borderRadius: 16 }}
    className="p-6 bg-gray-900 shadow-lg max-w-4xl mx-auto mt-20"
  >
    <div className="mt-5">
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
      <h2 className="text-2xl font-bold text-center mb-6">Tech Stack</h2>
      </FadeContent>
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <img src={skill.logo} alt={skill.name} className="w-14 h-14 object-contain" />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </FadeContent>
    </div>
  </ElectricBorder>
</div>



    
    );
}
