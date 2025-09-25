// app/classes/page.tsx
import Link from "next/link";

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

function StarRating({ value = 0, size = 40 }: { value?: number; size?: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const starIndex = i + 1;
        const fill =
          value >= starIndex ? 100 : value > i ? (value - i) * 100 : 0;

        return (
          <div
            key={i}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* gray background star */}
            <img
              src="/gray_star.png"
              alt=""
              style={{ width: size, height: size, display: "block" }}
            />
            {/* yellow overlay star */}
            {fill > 0 && (
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${fill}%` }}
              >
                <img
                  src="/yellow_star.png"
                  alt=""
                  style={{ width: size, height: size, display: "block" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



function CourseCard({
  course,
}: {
  course: Course;
}) {
  const {
    code,
    title,
    grade,
    rating,
    language,
    content,
    review,
    inProgress,
  } = course;

  return (
    <div className="rounded-xl border border-neutral-200 shadow-sm p-5 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-lg">
          <span className="text-black">{code}</span>
          {title ? <span className="text-neutral-500"> — {title}</span> : null}
          {inProgress ? <span className="ml-2 text-sm text-neutral-500">(in progress)</span> : null}
        </div>

        <div className="flex items-center gap-4">
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
    {
      code: "Calc 3",
      grade: "A",
      rating: 4,
      content: "",
      review: "",
    },
    {
      code: "TDM 101",
      grade: "A",
      rating: 4,
      language: "R",
      content: "",
      review: "",
    },
    {
      code: "Entrepreneurship 200",
      grade: "A",
      rating: 5,
      content: "",
      review: "",
    },
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

        {/* Order changed: most recent first */}
        <section className="mb-12">
          <h2 className="text-center text-3xl text-neutral-700 mb-6">
            Fall 2025 (in progress)
          </h2>
          <div className="grid gap-6">
            {fall2025.map((c, idx) => (
              <CourseCard key={`f25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-center text-3xl text-neutral-700 mb-6">Spring 2025</h2>
          <div className="grid gap-6">
            {spring2025.map((c, idx) => (
              <CourseCard key={`s25-${idx}`} course={c} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-center text-3xl text-neutral-700 mb-6">Fall 2024</h2>
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