"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials =  [
    {
      "quote": "The instructors at Harmony Music Academy truly care about their students. I've grown so much as a musician thanks to their guidance and support.",
      "name": "Sarah Thompson",
      "title": "Student, Guitar Program"
    },
    {
      "quote": "Rhythm & Beats Music School has transformed my drumming skills. The hands-on approach and personalized lessons made all the difference.",
      "name": "James Rodriguez",
      "title": "Student, Drums Program"
    },
    {
      "quote": "Melody Makers Institute provided me with a solid foundation in music theory and composition. I feel more confident in my abilities than ever before.",
      "name": "Emily Nguyen",
      "title": "Student, Composition Program"
    },
    {
      "quote": "Crescendo Music Conservatory is exceptional. The vocal training I received here has improved my technique and performance skills significantly.",
      "name": "Michael Johnson",
      "title": "Student, Vocal Program"
    },
    {
      "quote": "The electronic music production course at Rhythm & Beats was amazing. The facilities are top-notch and the instructors are industry professionals.",
      "name": "Alex Lee",
      "title": "Student, Electronic Music Production Program"
    },
    {
      "quote": "Harmony Music Academy offers a welcoming and inspiring environment. My piano skills have improved tremendously since I started taking lessons here.",
      "name": "Olivia Martinez",
      "title": "Student, Piano Program"
    },
    {
      "quote": "The jazz improvisation course at Melody Makers Institute has opened up new creative avenues for me. The instructors are fantastic and really know their stuff.",
      "name": "David Anderson",
      "title": "Student, Jazz Program"
    }
  ];

function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony : Voices of Success</h2>
      <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  )
}

export default TestimonialCards
