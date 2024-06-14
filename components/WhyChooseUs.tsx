
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Harmony Music Academy",
      description:
         "At Harmony Music Academy, we offer a wide range of music courses for all skill levels. Our experienced instructors provide personalized lessons in various instruments, music theory, and vocal training. Join us to enhance your musical talents and perform with confidence.",

      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Harmony Music Academy
        </div>
      ),
    },
    {
      title: "Rhythm & Beats Music School",
      description:
        "Rhythm & Beats Music School is dedicated to helping students of all ages discover their love for music. We provide high-quality instruction in drums, percussion, and electronic music production. Our state-of-the-art facilities and passionate teachers create an inspiring learning environment.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Rhythm & Beats Music School
        </div>
      ),
    },
    {
      title:  "Melody Makers Institute",
      description:
        "Melody Makers Institute offers comprehensive music education programs, from beginner to advanced levels. Our curriculum covers classical, jazz, and contemporary music, with courses in piano, guitar, violin, and more. Experience the joy of music-making with our talented faculty.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Melody Makers Institute
        </div>
      ),
    },
    {
      title: "Crescendo Music Conservatory",
      description:
        "Crescendo Music Conservatory is renowned for its excellence in music education. We provide rigorous training in various musical disciplines, including vocal performance, music composition, and orchestral instruments. Our goal is to nurture the next generation of musicians and performers.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Crescendo Music Conservatory
        </div>
      ),
    },
  ];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
