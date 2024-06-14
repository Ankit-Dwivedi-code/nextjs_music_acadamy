"use client";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  level: string;
  rating: number;
  category: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
        <Link href={`/courses/${course.slug}`} className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        Learn More
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {`$ ${course.price}`}
          </span>
        </Link >
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
