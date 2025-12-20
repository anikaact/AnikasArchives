"use client";

// app/classes/page.tsx
import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

type Course = {
  code: string;
  title?: string;
  grade?: string;
  rating?: number; // out of 5, supports halves (e.g., 3.5)
  language?: string;
  content?: string;
  review?: string;
  inProgress?: boolean;
};

function SvgText({ text, size = 60, gap = 6 }: { text: string; size?: number; gap?: number }) {
  return (
    <div className="flex justify-center flex-wrap" style={{ gap }}>
      {text.split("").map((ch, idx) => {
        if (ch === " ") {
          return <div key={idx} style={{ width: size * 0.45 }} />;
        }

        const lower = ch.toLowerCase();
        const letter = lower === "0" ? "o" : lower;
        const isSvgy = /^[a-z0-9]$/.test(letter);

        if (isSvgy) {
          return (
            <Image
              key={idx}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              width={size}
              height={size}
              className="bg-transparent"
              style={{ width: size, height: "auto", display: "block", backgroundColor: "transparent" }}
            />
          );
        }

        return (
          <span key={idx} style={{ fontSize: size * 0.85, lineHeight: 1 }}>
            {ch}
          </span>
        );
      })}
    </div>
  );
}

function StarRating({ value = 0, size = 40 }: { value?: number; size?: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const starIndex = i + 1;
        const fill = value >= starIndex ? 100 : value > i ? (value - i) * 100 : 0;

        return (
          <div key={i} className="relative shrink-0" style={{ width: size, height: size }}>
            <Image src="/gray_star.png" alt="" width={size} height={size} className="block w-full h-full" />
            {fill > 0 && (
              <div
                className="absolute top-0 left-0 h-full pointer-events-none"
                style={{ width: "100%", clipPath: `inset(0 ${100 - fill}% 0 0)` }}
              >
                <Image src="/yellow_star.png" alt="" width={size} height={size} className="block w-full h-full" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const { code, title, grade, rating, language, content, review, inProgress } = course;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[300px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - Pink Background */}
        <div
          className="absolute w-full h-full rounded-xl p-6 bg-[#f4bfc1] flex flex-col justify-between backface-hidden shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="text-xl font-semibold text-black mb-4">
              <div>{code}</div>
              {title && <div className="text-lg text-black/80 mt-1">{title}</div>}
              {inProgress && (
                <div className="text-sm text-black/60 mt-2 italic">(in progress)</div>
              )}
            </div>
            
            {typeof rating === "number" && (
              <div className="mb-4">
                <StarRating value={rating} size={32} />
              </div>
            )}
            
            {grade && (
              <div className="text-lg font-medium text-black">
                Grade: <span className="font-bold">{grade}</span>
              </div>
            )}
          </div>
          
          <div className="text-xs text-black/60 mt-4">Click to flip</div>
        </div>

        {/* Back Side - Content and Review */}
        <div
          className="absolute w-full h-full rounded-xl p-6 bg-white border-2 border-[#f4bfc1] flex flex-col backface-hidden shadow-lg overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-xl font-semibold text-black mb-4">{code}</div>
          
          <div className="space-y-3 text-sm leading-relaxed text-black flex-1">
            {language && (
              <div>
                <span className="text-neutral-500 font-medium">Language:</span>{" "}
                <span className="text-black">{language}</span>
              </div>
            )}
            {content && (
              <div>
                <span className="text-neutral-500 font-medium">Content:</span>{" "}
                <span className="text-black">{content}</span>
              </div>
            )}
            {review && (
              <div className="mt-4 pt-4 border-t border-[#f4bfc1]">
                <span className="text-neutral-500 font-medium">Review:</span>{" "}
                <span className="text-black italic">{review}</span>
              </div>
            )}
          </div>
          
          <div className="text-xs text-black/60 mt-4 text-center">Click to flip back</div>
        </div>
      </div>
    </div>
  );
}

export default function ClassesPage() {
  const fall2024: Course[] = [
    {
      code: "CS 180: Programming 1",
      grade: "B+",
      rating: 3,
      language: "Java",
      content:
        "Primitive data types and strings, single- & multi-dimensional arrays, OOP, exception handling, concurrency, I/O, GUIs, dynamic data structures, recursion",
      review:
        "I Enjoyed the semester-long client–server project, but the course was disorganized (first time the prof taught at Purdue).",
    },
    {
      code: "CS 193: Programming Tools",
      grade: "A",
      rating: 5,
      content: "Git, terminal commands, LaTeX",
      review:
        "Useful and laid-back. Assignments were fun and easy to follow. Taught by the Undergraduate Student Board—I joined after taking it!",
    },
    {
      code: "MA 261: Multivariable Calculus",
      grade: "A",
      rating: 4,
      content:
        "Planes, lines, and curves in three dimensions. Differential calculus of several variables; multiple integrals.",
      review: "I mainly self-studied for this class, and the content was interesting. ",
    },
    {
      code: "TDM 101: The Data Mine 1",
      grade: "A",
      rating: 4,
      language: "R",
      content: "R, Python, SQL, UNIX, web scraping",
      review:
        "I enjoyed the weekly projects in this class! I had never coded in R previous to this, and it was a smooth introduction into basic R concepts.",
    },
    {
      code: "ENTR 200: Intro to Entrepreneurship & Innovation",
      grade: "A",
      rating: 5,
      content:
        "Intro to entrepreneurship and technology commercialization, business skills, careers, and world economy.",
      review:
        "My professor for this class was super engaging! I also enjoyed coming up with a business venture with my group.",
    },
  ];

  const spring2025: Course[] = [
    {
      code: "CS 240: Programming in C",
      grade: "A",
      rating: 5,
      language: "C",
      content:
        "Pointers, memory management, data structures (linked lists, trees, hash tables), algorithms (sorting, searching), recursion, complexity analysis",
      review:
        "Challenging but rewarding. The homework projects really helped solidify my understanding of programming concepts.",
    },
    {
      code: "CS 182: Foundations of Computer Science",
      grade: "B+",
      rating: 5,
      content:
        "Logic, proofs, sets, functions, relations, numbers, counting, algorithms, graphs, recursion, number theory, probability, Boolean logic, automata, and computability.",
      review:
        "I really enjoyed this class! I found myself taking extra steps to deeply understand course material, and thouroughly enjoyed the theoretical aspect of the content.",
    },
    {
      code: "SCLA 101: Transformative texts",
      grade: "A",
      rating: 4.5,
      content:
        "Critical reading and writing, analysis of literature and other texts, argumentation, research skills, communication skills",
      review:
        "I enjoyed the discussions and essays in this class. I especially enjoyed researching and writing my creative final paper: Philosophy through Reddit.",
    },
    {
      code: "TDM 102: The Data Mine 2",
      grade: "A",
      rating: 3,
      content:
        "R environment, Python, visualizing data, UNIX, bash, regular expressions, SQL, XML and scraping data from the internet",
      review: "I learned a lot about data analysis and visualization in this class.",
    },
  ];

  const fall2025: Course[] = [
    {
      code: "CS 250: Computer Architecture",
      grade: "B+",
      rating: 2.5,
      content:
        "Digital Logic, Assembly Language, Computer Organization, Memory Hierarchy, I/O, Interrupts, Pipelining, Caches, Virtual Memory, and Parallel Computing",
      review:
        "The content I learned in this class was extremely interesting, but the professor was not organized. I had to do a lot of self-studying to keep up.",
    },
    {
      code: "CS 251: Data Structures and Algorithms",
      grade: "B+",
      rating: 5,
      language: "C++",
      content:
        "Runtime Analysis, Sorting, Graph Algorithms, trees, and hash tables",
      review:
        "I enjoyed this class! The professor was very engaging and the content was interesting. I learned a lot about data structures and algorithms.",
    },
    {
      code: "Stat 350: Intro to Statistics",
      grade: "B+",
      rating: 4.5,
      language: "R",
      content:
        "data-driven foundation in applied statistics, covering everything from exploratory analysis and experimental design to complex statistical inference and multiple regression using modern software.",
      review:
        "It was hard getting used to the flipped-learning format(watching videos at home and then coming to class to practice), but I enjoyed the content and the professor was very engaging. I was able to collaborate with peers in tackling complex problems.",
    },
    {
      code: "Entr 310: Marketing and Management for New Ventures",
      grade: "A",
      rating: 5,
      content:
        "advanced proficiency in essential venture creation and management skills, including marketing, finance, project management, leadership, and ethics.",
      review: "I absolutely LOVED this class and my professor!! He went above and beyond in finding incredible guest speakers, and gave me career advice. I was able to learn so much about building a business from successful entrepreneurs. Thank you Professor Scott!",
    },
  ];

  return (
    <main className="px-6 md:px-8 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Fall 2025 */}
        <ScrollReveal direction="up">
          <section className="mb-12 mt-12">
            <div className="mb-2 flex flex-col items-center">
              <SvgText text="Fall 2025" size={45} />
              <div className="text-neutral-500 italic text-sm mt-1">(in progress)</div>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {fall2025.map((c, idx) => (
                <ScrollReveal key={`f25-${idx}`} direction="scale" delay={idx * 0.1}>
                  <CourseCard course={c} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Spring 2025 */}
        <ScrollReveal direction="up">
          <section className="mb-12 mt-30">
            <div className="mb-6 flex justify-center">
              <SvgText text="Spring 2025" size={45} />
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {spring2025.map((c, idx) => (
                <ScrollReveal key={`s25-${idx}`} direction="scale" delay={idx * 0.1}>
                  <CourseCard course={c} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Fall 2024 */}
        <ScrollReveal direction="up">
          <section className="mb-12 mt-30">
            <div className="mb-6 flex justify-center">
              <SvgText text="Fall 2024" size={45} />
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {fall2024.map((c, idx) => (
                <ScrollReveal key={`f24-${idx}`} direction="scale" delay={idx * 0.1}>
                  <CourseCard course={c} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
