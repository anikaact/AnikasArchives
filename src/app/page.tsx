function randomWobbleStyle() {
  const start = `${-10 + Math.random() * 20}deg`; // -10deg to +10deg
  const end = `${-10 + Math.random() * 20}deg`;   // -10deg to +10deg
  const duration = `${1 + Math.random() * 2}s`;   // 1s – 3s
  const delay = `${Math.random()}s`;              // small delay offset

  return {
    '--angle-start': start,
    '--angle-end': end,
    animationDuration: duration,
    animationDelay: delay,
  } as React.CSSProperties;
}

export default function Home() {
  const lettersTop = ['a', 'n', 'i', 'k', 'a', 's'];
  const lettersBottom = ['a', 'r', 'c', 'h', 'i', 'v', 'e', 's'];

  return (
    <main className="p-8 flex flex-col items-center justify-center min-h-screen">
      {/* "welcome to" */}
      <div className="flex flex-wrap gap-1 justify-center mb-4">
        <img src="/svgs/w.svg" alt="w" className="h-[40px] w-auto" />
        <img src="/svgs/e.svg" alt="e" className="h-[40px] w-auto" />
        <img src="/svgs/l.svg" alt="l" className="h-[40px] w-auto" />
        <img src="/svgs/c.svg" alt="c" className="h-[40px] w-auto" />
        <img src="/svgs/o.svg" alt="o" className="h-[40px] w-auto" />
        <img src="/svgs/m.svg" alt="m" className="h-[40px] w-auto" />
        <img src="/svgs/e.svg" alt="e" className="h-[40px] w-auto" />

        <div className="w-[20px]" />

        <img src="/svgs/t.svg" alt="t" className="h-[40px] w-auto" />
        <img src="/svgs/o.svg" alt="o" className="h-[40px] w-auto" />
      </div>

      {/* "anikas archives" with random wobble */}
      <div className="flex flex-wrap gap-1 justify-center">
        {lettersTop.map((letter, idx) => (
          <img
            key={`top-${idx}`}
            src={`/svgs/${letter}.svg`}
            alt={letter}
            className="h-[70px] w-auto wobble"
            style={randomWobbleStyle()}
          />
        ))}

        <div className="w-[30px]" />

        {lettersBottom.map((letter, idx) => (
          <img
            key={`bottom-${idx}`}
            src={`/svgs/${letter}.svg`}
            alt={letter}
            className="h-[70px] w-auto wobble"
            style={randomWobbleStyle()}
          />
        ))}
      </div>
    </main>
  );
}
