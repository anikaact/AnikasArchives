"use client";
import { Sour_Gummy } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import LoadingOverlay from './LoadingOverlay';
import ScrollReveal from './ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const lettersAboutMe = ['a', 'b', 'o', 'u', 't', '', 'm', 'e'];
  const lettersEducation = ['e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'];
  const lettersWork = [
    'w', 'o', 'r', 'k', '',
    'e', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's'
  ];
  const lettersHobbies = ['h', 'o', 'b', 'b', 'i', 'e', 's'];

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for photos
  const photo1Y = useTransform(scrollYProgress, [0, 0.5], [0, 5]);
  const photo2Y = useTransform(scrollYProgress, [0.2, 0.7], [0, 5]);
  const photo3Y = useTransform(scrollYProgress, [0.4, 0.9], [0, 5]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cutoutTextVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      backgroundColor: "transparent",
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.17, 0.67, 0.83, 0.67] as const,
      },
    }),
    hover: {
      y: -5,
      scale: 1.05,
      backgroundColor: "transparent",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <LoadingOverlay />
      <main ref={containerRef} className="p-8 flex flex-col items-center justify-center mb-4 mt-20">
      {/* ---- REPLACED: Single image for "welcome to" ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-60 w-full max-w-4xl"
      >
        <Image
          src="/welcome!.png"
          alt="welcome to"
          width={1600}
          height={800}
          className="w-full h-auto"
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </motion.div>


      {/* "About Me" in SVG letters */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap gap-1 justify-center mt-60 mb-36"
      >
        {lettersAboutMe.map((letter, idx) =>
          letter === '' ? (
            <div key={`about-space-${idx}`} className="w-[30px]" />
          ) : (
            <motion.div
              key={`about-${idx}`}
              custom={idx}
              variants={cutoutTextVariants}
              whileHover="hover"
              className="bg-transparent"
              style={{ backgroundColor: "transparent" }}
            >
              <Image
                src={`/svgs/${letter}.svg`}
                alt={letter}
                className="h-[80px] w-auto cutout-text bg-transparent"
                width={80}
                height={80}
                style={{ backgroundColor: "transparent" }}
              />
            </motion.div>
          )
        )}
      </motion.div>


      {/**-----------------------EDUCATION SECTION------------------------/ */}
      {/* "education" in SVG letters */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap gap-1 justify-center mb-10"
      >
        {lettersEducation.map((letter, idx) => (
          <motion.div
            key={`edu-${idx}`}
            custom={idx}
            variants={cutoutTextVariants}
            whileHover="hover"
            className="bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            <Image
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[50px] w-auto cutout-text bg-transparent"
              width={50}
              height={50}
              style={{ backgroundColor: "transparent" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bell Tower section */}
      <ScrollReveal direction="up" className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">
        {/* Image + caption wrapper with centered background + foreground */}
        <div className="relative flex justify-center w-full max-w-[360px] text-center">
          {/* background frame, bigger & behind */}
          <ScrollReveal direction="scale" delay={0.2} className="absolute inset-0 -z-10">
            <Image
              src="/frame.png"
              alt="frame"
              className="rounded-lg scale-135 translate-y-3"
              width={360}
              height={360}
            />
          </ScrollReveal>

          {/* foreground image + caption */}
          <ScrollReveal direction="left" delay={0.3} className="relative z-10 rounded-lg">
            <motion.div style={{ y: photo1Y }}>
              <Image
                src="/Bell_Tower.jpg"
                alt="Purdue Bell Tower"
                className="shadow w-full h-auto rounded-lg photo-hover"
                width={600}
                height={400}
              />
              <p className="mt-1 text-sm text-black bg-transparent">
                Purdue Bell Tower
              </p>
            </motion.div>
          </ScrollReveal>
        </div>



        {/* text + sticker side by side */}
        <ScrollReveal direction="right" delay={0.4} className="flex items-start gap-4 relative">
          <p className="text-lg text-black leading-relaxed relative">
            I&apos;m a sophomore at Purdue University studying Computer Science and pursuing a
            Certificate in Entrepreneurship & Innovation.
            Curious about the journey so far? Click
            <Link
              href="/classes"
              className="text-[#eaa9ae] hover:text-[#dc828a] transition-colors"
            >
              {" "} here {" "}
            </Link>
            to learn more about classes I&apos;ve taken!
          </p>

          {/* sticker positioned at bottom-right of paragraph */}
          <Image
            src="/bell_tower_sticker.png"
            alt="Bell Tower sticker"
            className="w-20 h-auto rotate-20 absolute -bottom-35 right-0 wobble"
            style={{
              filter:
                "drop-shadow(0 0 0 black) drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)"
            }}
            width={80}
            height={80}
          />
        </ScrollReveal>
      </ScrollReveal>

      {/**-----------------------WORK EXPERIENCES SECTION------------------------/ */}
      {/* "work experiences" title in SVG letters (single line with spacer) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap gap-1 justify-center mt-26 mb-10"
      >
        {lettersWork.map((letter, idx) =>
          letter === '' ? (
            <div key={`work-space-${idx}`} className="w-[30px]" />
          ) : (
            <motion.div
              key={`work-${idx}`}
              custom={idx}
              variants={cutoutTextVariants}
              whileHover="hover"
              className="bg-transparent"
              style={{ backgroundColor: "transparent" }}
            >
              <Image
                src={`/svgs/${letter}.svg`}
                alt={letter}
                className="h-[50px] w-auto cutout-text bg-transparent"
                width={50}
                height={50}
                style={{ backgroundColor: "transparent" }}
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* Work experiences section (image on RIGHT, same format as Hobbies) */}
      <ScrollReveal direction="up" className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-3xl gap-16">

          {/* Image + caption wrapper with centered background + foreground (framed) */}
          <div className="relative flex justify-center md:w-auto">
            {/* fixed-width container so frame & photo align */}
            <div className="relative w-70 text-center">
              {/* background frame (slightly bigger, behind) */}
              <ScrollReveal direction="scale" delay={0.2} className="absolute inset-0 -z-10">
                <Image
                  src="/frame.png"
                  alt="Work image background frame"
                  className="rounded-lg scale-110 -translate-y-3 -translate-x-4"
                  width={300}
                  height={220}
                />
              </ScrollReveal>
              {/* foreground image + caption */}
              <ScrollReveal direction="right" delay={0.3} className="relative z-10 rounded-lg">
                <motion.div style={{ y: photo2Y }}>
                  <Image
                    src="/Arrcus.jpg"
                    alt="Arrcus"
                    className="shadow w-58 full h-auto rounded-lg photo-hover"
                    width={200}
                    height={400}
                  />
                  <p className="mt-1 text-sm text-black bg-transparent -translate-x-">
                    Arrcus interns!
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* text + sticker side by side */}
          <ScrollReveal direction="left" delay={0.4} className="flex items-start gap-4 relative">
            <p className="text-lg text-black leading-relaxed relative">
              I&apos;ve interned at 2 companies so far: Arrcus (Summer 2024) and Sierra Ventures (Summer 2025).
              Learn more about my roles and experiences on the
              <Link
                href="/career"
                className="text-[#eaa9ae] hover:text-[#dc828a] transition-colors"
              >
                {" "} career {" "}
              </Link>
              page!
            </p>
          </ScrollReveal>
        </div>
      </ScrollReveal>



      {/**-----------------------HOBBIES SECTION------------------------/ */}
      {/* "hobbies" in SVG letters */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-wrap gap-1 justify-center mt-26 mb-10"
      >
        {lettersHobbies.map((letter, idx) => (
          <motion.div
            key={`hobby-title-${idx}`}
            custom={idx}
            variants={cutoutTextVariants}
            whileHover="hover"
            className="bg-transparent"
            style={{ backgroundColor: "transparent" }}
          >
            <Image
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[50px] w-auto cutout-text bg-transparent"
              width={50}
              height={50}
              style={{ backgroundColor: "transparent" }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Hobbies section (same layout as Education) */}
      <ScrollReveal direction="up" className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">
        {/* Image section */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl gap-16">
          {/* Image + caption wrapper with centered background + foreground */}
          <div className="relative flex justify-center w-full">
            {/* background (slightly bigger, behind) */}
            <ScrollReveal direction="scale" delay={0.2} className="absolute">
              <Image
                src="/frame.png"
                alt="Craft fair background"
                className="w-100 h-auto rounded-lg -translate-y-10 -translate-x-1"
                width={500}
                height={380}
              />
            </ScrollReveal>
            {/* foreground image + caption */}
            <ScrollReveal direction="left" delay={0.3} className="relative z-10 w-60 h-auto rounded-lg text-center">
              <motion.div style={{ y: photo3Y }}>
                <Image
                  src="/Craft_fair.jpeg"
                  alt="Craft fair"
                  className="shadow w-full h-auto rounded-lg photo-hover"
                  width={600}
                  height={400}
                />
                <p className="mt-1 text-sm text-black bg-transparent">
                  selling jewelry at an art fair
                </p>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* text + sticker side by side */}
          <ScrollReveal direction="right" delay={0.4} className="flex items-start gap-4 relative">
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
            <Image
              src="/pickleball_sticker.jpg"
              alt="Pickleball sticker"
              className="w-20 h-auto absolute -bottom-25 right-0 wobble"
              width={80}
              height={80}
            />
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </main>
    </>
  );
}
