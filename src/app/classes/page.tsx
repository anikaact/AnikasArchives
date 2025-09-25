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

/** Renders a word using per-letter SVGs from /public/letters/<char>.svg
 *  - Maps "0" to "o"
 *  - Letters are lowercased to match filenames like a.svg, b.svg, ...
 *  - Unknown chars fall back to a normal <span> so you still see them.
 */
function SvgText({ text, size = 60, gap = 6 }: { text: string; size?: number; gap?: number }) {
  return (
    <div className="flex justify-center flex-wrap" style={{ gap }}>
      {text.split("").map((ch, idx) => {
        if (ch === " ") {
          // space: fixed spacer so words separate nicely
          return <div key={idx} style={{ width: size * 0.45 }} />;
        }

        const lower = ch.toLowerCase();
        const letter = lower === "0" ? "o" : lower; // <- 0 becomes o

        // only [a-z0-9] are expected as SVGs (except 0 which maps to o)
        const isSvgy = /^[a-z0-9]$/.test(letter);

        if (isSvgy) {
          return (
            <img
              key={idx}
              src={`/svgs/${letter}.svg`} // ensure files exist here
              alt={letter}
              style={{ width: size, height: "auto", display: "block" }}
            />
          );
        }

        // Fallback for punctuation, etc.
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
            {/* gray background star */}
            <img src="/gray_star.png" alt="" className="block w-full h-full" />

            {/* yellow overlay star — clip by inset to avoid odd rectangular crop illusions */}
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

  return (
    <div className="rounded-xl border border-neutral-200 shadow-sm p-5 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-2xl font-semibold">
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
      code: "CS 180",
      grade: "B+",
      rating: 3,
      language: "Java",
      content:
        "Primitive data types and strings, single- & multi-dimensional arrays, OOP, exception handling, concurrency, I/O, GUIs, dynamic data structures, recursion",
      review:
        "Enjoyed the semester-long client–server project, but the course was disorganized (first time the prof taught at Purdue).",
    },
    {
      code: "CS 193",
      grade: "A",
      rating: 5,
      content: "Git, terminal commands, LaTeX",
      review:
        "Useful and laid-back. Assignments were fun and easy to follow. Taught by the Undergraduate Student Board—I joined after taking it!",
    },
    { code: "Calc 3", grade: "A", rating: 4, content: "", review: "" },
    { code: "TDM 101", grade: "A", rating: 4, language: "R", content: "", review: "" },
    { code: "Entrepreneurship 200", grade: "A", rating: 5, content: "", review: "" },
  ];

  const spring2025: Course[] = [
    { code: "CS 240", grade: "A", rating: 5 },
    { code: "CS 182", grade: "B+", rating: 5 },
    { code: "SCLA 101", grade: "A", rating: 4.5 },
    { code: "TDM 102", grade: "A", rating: 3 },
  ];

  const fall2025: Course[] = [
    { code: "CS 250", inProgress: true },
    { code: "CS 251", inProgress: true },
    { code: "Entrepreneurship 310", inProgress: true },
    { code: "Stat 350", inProgress: true },
  ];

  return (
    <main className="px-6 md:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-5xl text-black mb-12">Classes</h1>

        {/* Most recent first */}
        <section className="mb-12 mt-12">
          <div className="mb-2 flex flex-col items-center">
            <SvgText text="Fall 2025" size={45} />
            <div className="text-neutral-500 italic text-sm mt-1">(in progress)</div>
          </div>
          <div className="grid gap-6">
            {fall2025.map((c, idx) => (
              <CourseCard key={`f25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-12 mt-30">
          <div className="mb-6 flex justify-center">
            <SvgText text="Spring 2025" size={45} />
          </div>
          <div className="grid gap-6">
            {spring2025.map((c, idx) => (
              <CourseCard key={`s25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-12 mt-30">
          <div className="mb-6 flex justify-center">
            <SvgText text="Fall 2024" size={45} />
          </div>
          <div className="grid gap-6">
            {fall2024.map((c, idx) => (
              <CourseCard key={`f24-${idx}`} course={c} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
