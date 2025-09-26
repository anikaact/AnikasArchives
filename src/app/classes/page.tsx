// app/classes/page.tsx

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
            <img
              key={idx}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              style={{ width: size, height: "auto", display: "block" }}
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
            <img src="/gray_star.png" alt="" className="block w-full h-full" />
            {fill > 0 && (
              <div
                className="absolute top-0 left-0 h-full pointer-events-none"
                style={{ width: "100%", clipPath: `inset(0 ${100 - fill}% 0 0)` }}
              >
                <img src="/yellow_star.png" alt="" className="block w-full h-full" />
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

  // Border color logic
  const borderColor = code.startsWith("CS") ? "border-[#f4bfc1]" : "border-amber-200";

  return (
    <div className={`rounded-xl p-5 bg-white border-2 ${borderColor}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xl font-semibold">
          <span className="text-black">{code}</span>
          {title ? <span className="text-neutral-500"> — {title}</span> : null}
          {inProgress ? <span className="ml-2 text-sm text-neutral-500">(in progress)</span> : null}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {typeof rating === "number" ? <StarRating value={rating} size={28} /> : null}
          {grade ? (
            <span className="text-sm text-neutral-600">
              Grade: <span className="text-black">{grade}</span>
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-3 space-y-2 text-sm leading-relaxed text-black">
        {language ? (
          <p>
            <span className="text-neutral-500">Language:</span>{" "}
            <span className="text-black">{language}</span>
          </p>
        ) : null}
        {content ? (
          <p>
            <span className="text-neutral-500">Content:</span>{" "}
            <span className="text-black">{content}</span>
          </p>
        ) : null}
        {review ? (
          <p>
            <span className="text-neutral-500">Review:</span>{" "}
            <span className="text-black">{review}</span>
          </p>
        ) : null}
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
    { code: "CS 250: Computer Architecture", inProgress: true },
    { code: "CS 251: Data structures", inProgress: true },
    { code: "Entr 310: Marketing and Management for New Ventures", inProgress: true },
    { code: "Stat 350: Intro to Statistics", inProgress: true },
  ];

  return (
    <main className="px-6 md:px-8 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Fall 2025 */}
        <section className="mb-12 mt-12">
          <div className="mb-2 flex flex-col items-center">
            <SvgText text="Fall 2025" size={45} />
            <div className="text-neutral-500 italic text-sm mt-1">(in progress)</div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fall2025.map((c, idx) => (
              <CourseCard key={`f25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        {/* Spring 2025 */}
        <section className="mb-12 mt-30">
          <div className="mb-6 flex justify-center">
            <SvgText text="Spring 2025" size={45} />
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {spring2025.map((c, idx) => (
              <CourseCard key={`s25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        {/* Fall 2024 */}
        <section className="mb-12 mt-30">
          <div className="mb-6 flex justify-center">
            <SvgText text="Fall 2024" size={45} />
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fall2024.map((c, idx) => (
              <CourseCard key={`f24-${idx}`} course={c} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
