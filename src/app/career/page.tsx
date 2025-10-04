"use client";

import Image from "next/image";
import Link from "next/link";

export default function Career() {
  const lettersCareer = ["c", "a", "r", "e", "e", "r"];

  const roles = [
    {
      company: "Sierra Ventures",
      season: "Summer 2025",
      image: "/Sierra_Ventures.jpg",
      imageCaption: "Helping out at a networking event!",
      roleCaption: "AI Automation Intern",
      bullets: [
        "Built AI-powered sourcing pipelines (Zapier, Python, Sheets).",
        "Scored early-stage traction using custom signals and scripts.",
        "Published weekly AI digest for the investment team.",
      ],
      imageOnRight: true,
    },
    {
      company: "Arrcus, Inc.",
      season: "Summer 2024",
      image: "/Arrcus.jpg",
      imageCaption: "Arrcus Interns!",
      roleCaption: "Software Engineering Intern",
      bullets: [
        "Developed internal tooling for networking workflows.",
        "Collaborated with engineers on feature prototyping.",
        "Wrote scripts and docs to accelerate team velocity.",
      ],
      imageOnRight: false,
    },
    {
      company: "Purdue Undergraduate Student Board",
      season: "2023 – Present",
      image: "/usb_group_2024.jpeg",
      imageCaption: "Board members :)",
      roleCaption: "Panels & Social Wellness Initiative Lead",
      bullets: [
        "Organized CS Tracks Panel and mental health events for 3,500+ students.",
        "Collaborated with department staff to enhance community engagement.",
        "Managed event logistics and speaker outreach.",
      ],
      imageOnRight: true,
    },
  ];

  return (
    <main className="p-8 flex flex-col items-center justify-center mb-4 mt-20">
      {/* ---- Page Title ---- */}
      <div className="flex flex-wrap gap-1 justify-center mb-8">
        {lettersCareer.map((letter, idx) => (
          <Image
            key={`career-${idx}`}
            src={`/svgs/${letter}.svg`}
            alt={letter}
            className="h-[60px] w-auto"
            width={60}
            height={60}
          />
        ))}
      </div>

      {/* ---- Divider ---- */}
      <div className="my-6 text-center text-[#f4bfc1] text-2xl tracking-widest">
        ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
      </div>

      {/* ---- Roles ---- */}
      <div className="mt-14 w-full flex flex-col items-center gap-20">
        {roles.map((role) => (
          <section key={role.company} className="w-full flex justify-center">
            <div
              className={`flex flex-col md:flex-row ${
                role.imageOnRight ? "md:flex-row-reverse" : ""
              } items-center md:items-start max-w-3xl gap-12`}
            >
              {/* ---- Static Image ---- */}
              <div className="relative w-72">
                <Image
                  src="/frame.png"
                  alt="Decorative frame"
                  className="absolute inset-0 -z-10 rounded-lg opacity-80 scale-110"
                  width={320}
                  height={240}
                  aria-hidden
                />
                <Image
                  src={role.image}
                  alt={role.company}
                  className="shadow w-60 h-auto rounded-lg translate-x-7 translate-y-3"
                  width={600}
                  height={200}
                />
                <p className="mt-1 text-sm text-black bg-transparent text-center translate-y-2">
                  {role.imageCaption}
                </p>
              </div>

              {/* ---- Text ---- */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-1">{role.company}</h3>
                <p className="text-[#dc828a] font-medium mb-2">{role.season}</p>
                <p className="text-sm text-black mb-3">{role.roleCaption}</p>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  {role.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ---- Divider ---- */}
      <div className="my-12 text-center text-[#f4bfc1] text-2xl tracking-widest">
        ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
      </div>
    </main>
  );
}
