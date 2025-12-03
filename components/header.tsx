"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="text-white dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">

         <div
          className="flex items-center gap-3 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => router.push("/")}
        >
          <img
            src="gicon.png"
            alt="VRP Logo"
            width={100}
            height={120}
            className="object-contain "
            
          />
        </div>

        <nav className="flex items-center gap-6">
          <button onClick={() => router.push("/about")} className="
  relative
  text-white
  text-md
  cursor-pointer
  px-3 py-1
  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 
  before:absolute before:left-0 before:top-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-300
  hover:after:w-full hover:before:w-full
">About</button>
          <button onClick={() => router.push("/skills")} className="relative
  text-white
  text-md
  cursor-pointer
  px-3 py-1
  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 
  before:absolute before:left-0 before:top-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-300
  hover:after:w-full hover:before:w-full">Skills</button>
          <button onClick={() => router.push("/experience")} className="relative
  text-white
  text-md
  cursor-pointer
  px-3 py-1
  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 
  before:absolute before:left-0 before:top-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-300
  hover:after:w-full hover:before:w-full">Experience</button>
          <button onClick={() => router.push("/contact")} className="relative
  text-white
  text-md
  cursor-pointer
  px-3 py-1
  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 
  before:absolute before:left-0 before:top-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-300
  hover:after:w-full hover:before:w-full">Contact</button>
        </nav>
      </div>
    </header>
  );
}
