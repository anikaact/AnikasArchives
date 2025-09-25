import { Sour_Gummy } from 'next/font/google';
import Link from 'next/link';

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust weights as needed
});

export default function Home() {
  const lettersTop = ['a', 'n', 'i', 'k', 'a', '\'', 's'];
  const lettersBottom = ['a', 'r', 'c', 'h', 'i', 'v', 'e', 's'];
  const lettersEducation = ['e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];
  const lettersWork = [
    'w', 'o', 'r', 'k', '',
    'e', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's'
  ];
  const lettersHobbies = ['h', 'o', 'b', 'b', 'i', 'e', 's'];


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

      {/* horizontal divider */}
      <div className="my-10 text-center text-[#f4bfc1] text-2xl tracking-widest">
        ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
      </div>


      {/**-----------------------EDUCATION SECTION------------------------/ */}
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
        {/* put the frame on the wrapper, not the img */}
        <div className="w-200 h-auto rounded-lg border-8 border-[#eaa9ae]">
          <img
            src="/Bell_tower.jpg"
            alt="Bell Tower"
            className="shadow"
          />
        </div>


        {/* text + sticker side by side */}
        <div className="flex items-start gap-4 relative">
          <p className="text-lg text-black leading-relaxed relative">
            I’m a sophomore at Purdue University studying Computer Science and pursuing a
            Certificate in Entrepreneurship & Innovation.
            Curious about the journey so far? Click
            <Link
              href="/classes"
              className="text-[#eaa9ae] hover:text-[#dc828a] transition-colors"
            >
              {" "} here {" "}
            </Link>
            to learn more about classes I've taken!
          </p>

          {/* sticker positioned at bottom-right of paragraph */}
          <img
            src="/bell_tower_sticker.png"
            alt="Bell Tower sticker"
            className="w-20 h-auto rotate-20 absolute -bottom-35 right-0 wobble"
            style={{
              filter:
                "drop-shadow(0 0 0 black) drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)"
            }}
          />
        </div>
      </div>

      {/**-----------------------WORK EXPERIENCES SECTION------------------------/ */}
      {/* "work experiences" title in SVG letters (single line with spacer) */}
      <div className="flex flex-wrap gap-1 justify-center mt-26 mb-10">
        {lettersWork.map((letter, idx) =>
          letter === '' ? (
            <div key={`work-space-${idx}`} className="w-[30px]" />
          ) : (
            <img
              key={`work-${idx}`}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[50px] w-auto"
            />
          )
        )}
      </div>

      {/* Work experiences section (image on RIGHT) */}
      <section className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-3xl gap-16">
          <img
            src="/Arrcus.jpg"
            alt="Arrcus"
            className="w-60 h-auto rounded-lg shadow"
          />
          <div className="flex items-start">
            <p className="text-lg text-black leading-relaxed">
              I've interned at 2 companies so far: Arrcus (Summer 2024) and Sierra Ventures (Summer 2025).
              Learn more about my roles and experiences on the
              <Link
                href="/career"
                className="text-[#eaa9ae] hover:text-[#dc828a] transition-colors"
              >
                {" "} career {" "}
              </Link>
              page!
            </p>
          </div>
        </div>
      </section>


      {/**-----------------------HOBBIES SECTION------------------------/ */}
      {/* "hobbies" in SVG letters */}
      <div className="flex flex-wrap gap-1 justify-center mt-26 mb-10">
        {lettersHobbies.map((letter, idx) => (
          <img
            key={`hobby-title-${idx}`}
            src={`/svgs/${letter}.svg`}
            alt={letter}
            className="h-[50px] w-auto"
          />
        ))}
      </div>

      {/* Hobbies section (same layout as Education) */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">

        {/* Image section */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">
          {/* Image + caption wrapper with centered background + foreground */}
          <div className="relative flex justify-center w-full">
            {/* background (slightly bigger, behind) */}
            <img
              src="/Craft_fair.jpeg"
              alt="Craft fair background"
              className="absolute w-70 h-auto rounded-lg opacity-80 -translate-y-2"
            />
            {/* foreground image + caption */}
            <div className="relative z-10 w-60 h-auto rounded-lg text-center">
              <img
                src="/Craft_fair.jpeg"
                alt="Craft fair"
                className="shadow w-full h-auto rounded-lg"
              />
              <p className="mt-1 text-sm text-black bg-transparent">
                selling jewelry at an art fair
              </p>
            </div>
          </div>

          {/* text + sticker side by side */}
          <div className="flex items-start gap-4 relative">
            <p className="text-lg text-black leading-relaxed relative">
              Some of my hobbies include playing pickleball, climbing, and hiking!
              As you can probably tell from this website, I also love
              <Link
                href="/crafts"
                className="text-[#eaa9ae] hover:text-[#dc828a] transition-colors"
              >
                {" "} crafting
              </Link>
              !
            </p>
            {/* sticker positioned at bottom-right of paragraph */}
            <img
              src="/pickleball_sticker.jpg"
              alt="Pickleball sticker"
              className="w-20 h-auto absolute -bottom-25 right-0 wobble"
            />
          </div>
        </div>
      </div>


    </main>
  );
}
