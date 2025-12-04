"use client";

import Header from "@/components/header";
import SplashCursor from "@/components/SplashCursor";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
<SplashCursor />
      <section className="container mx-auto px-6 pt-24 pb-16">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          WORK EXPERIENCE
        </h2>

        <div className="space-y-10 border-l border-cyan-600 pl-8">
          
          {/* FINALTY */}
          <div className="relative group">
            <div className="absolute -left-6 top-1 w-5 h-5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
            <h3 className="text-xl font-semibold">FINALTY | JAN 2024 - NOV 2025</h3>
            <p className="text-cyan-300 font-medium mb-2">
              FULL STACK DEVELOPER | Loan & Property Management System
            </p>
            <ul className="text-gray-300 space-y-2 leading-relaxed">
              <li>
                Designed and developed end-to-end features for a loan & property
                management platform with seamless onboarding and workflow automation.
              </li>
              <li>
                Built scalable REST APIs for loan processing, repayment schedules,
                property document management & role-based access.
              </li>
              <li>
                Implemented responsive UI screens including dashboards, EMI calculators,
                borrower profiles & payment tracking using React.js, Next.js & Tailwind CSS.
              </li>
              <li>
                Integrated secure authentication using JWT / Clerk / NextAuth.
              </li>
              <li>
                Collaborated with QA, UI/UX & product team in Agile sprints.
              </li>
            </ul>
          </div>

          {/* IPPOPAY */}
          <div className="relative group">
            <div className="absolute -left-6 top-1 w-5 h-5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></div>
            <h3 className="text-xl font-semibold"> IPPOPAY | AUG 2022 - NOV 2023</h3>
            <p className="text-cyan-300 font-medium mb-2">
              FULL STACK DEVELOPER | Payment Gateway
            </p>
            <ul className="text-gray-300 space-y-2 leading-relaxed">
              <li>
                Built payment analytics dashboard for merchants to monitor transaction
                metrics in real-time.
              </li>
              <li>
                Developed secure REST APIs for transactions, settlements, refunds,
                and financial reporting.
              </li>
              <li>
                Built UI screens with insights, filters, invoice downloads & performance tracking.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
