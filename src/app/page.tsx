import { Sour_Gummy } from 'next/font/google';

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust weights as needed
});

export default function Home() {
  const lettersTop = ['a', 'n', 'i', 'k', 'a', 's'];
  const lettersBottom = ['a', 'r', 'c', 'h', 'i', 'v', 'e', 's'];
  const lettersEducation = ['e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];

  return (

    <main className="p-8 flex flex-col items-center justify-center mb-4 mt-40">
      {/* "welcome to" */}
      <div className="flex flex-wrap gap-1 justify-center mb-8">
        {['w', 'e', 'l', 'c', 'o', 'm', 'e', '', 't', 'o'].map((ch, i) =>
          ch === '' ? (
            <div key={`space-${i}`} className="w-[20px]" />
          ) : (
            <img
              key={`welcome-${i}`}
              src={`/svgs/${ch}.svg`}
              alt={ch}
              className="h-[50px] w-auto"
            />
          )
        )}
      </div>

      {/* "anikas archives" */}
      <div className="flex flex-col items-center gap-2 mb-50">
        <div className="flex flex-wrap gap-1 justify-center">
          {lettersTop.map((letter, idx) => (
            <img
              key={`top-${idx}`}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[100px] w-auto"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-1 justify-center">
          {lettersBottom.map((letter, idx) => (
            <img
              key={`bottom-${idx}`}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[8=100px] w-auto"
            />
          ))}
        </div>
      </div>

      {/* "education" in SVG letters */}
      <div className="flex flex-wrap gap-1 justify-center mb-10">
        {lettersEducation.map((letter, idx) => (
          <img
            key={`edu-${idx}`}
            src={`/svgs/${letter}.svg`}
            alt={letter}
            className="h-[50px] w-auto"
          />
        ))}
      </div>

      {/* Bell Tower section */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">
        <img
          src="/Bell_tower.jpg"
          alt="Bell Tower"
          className="w-60 h-auto rounded-lg shadow"
        />

        {/* text + sticker side by side */}
        <div className="flex items-start gap-4 relative">
          <p className="text-lg text-black leading-relaxed relative">
            Purdue’s iconic Bell Tower is a symbol of tradition and progress.
            Rising above the center of campus, it reminds students of the
            university’s heritage while inspiring them to look toward the future.
          </p>

          {/* sticker positioned at bottom-right of paragraph */}
          <img
            src="/bell_tower_sticker.png"
            alt="Bell Tower sticker"
            className="w-16 h-auto rotate-20 absolute -bottom-20 right-0"
            style={{
              filter:
                "drop-shadow(0 0 0 black) drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)"
            }}
          />
        </div>


      </div>

    </main>
  );
}
