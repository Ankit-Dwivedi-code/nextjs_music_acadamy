'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const   FeaturedWebinars = [
    {
      "title": "Mastering Music Production",
      "description": "Join our expert panel to learn advanced music production techniques, including mixing, mastering, and sound design. Perfect for producers looking to take their skills to the next level.",
      "slug": "mastering-music-production",
      "isFeatured": true
    },
    {
      "title": "Vocal Techniques for Beginners",
      "description": "This webinar is designed for aspiring singers who want to improve their vocal technique and performance skills. Learn from experienced vocal coaches and gain confidence in your singing abilities.",
      "slug": "vocal-techniques-for-beginners",
      "isFeatured": false
    },
    {
      "title": "Songwriting Essentials",
      "description": "Discover the key elements of successful songwriting in this comprehensive webinar. Topics include melody creation, lyric writing, and song structure. Ideal for songwriters of all levels.",
      "slug": "songwriting-essentials",
      "isFeatured": true
    },
    {
      "title": "Jazz Improvisation Masterclass",
      "description": "Learn the art of jazz improvisation from renowned jazz musicians. This masterclass covers improvisation techniques, jazz theory, and practical tips for enhancing your solo performances.",
      "slug": "jazz-improvisation-masterclass",
      "isFeatured": false
    },
    {
      "title": "Electronic Music Trends",
      "description": "Stay ahead of the curve with our webinar on the latest trends in electronic music. From new genres to innovative production techniques, this session is a must for electronic music enthusiasts.",
      "slug": "electronic-music-trends",
      "isFeatured": true
    },
    {
      "title": "Classical Music Appreciation",
      "description": "Deepen your understanding and appreciation of classical music with our expert-led webinar. Explore the history, key composers, and major works that have shaped the classical music landscape.",
      "slug": "classical-music-appreciation",
      "isFeatured": false
    },
    {
      "title": "Advanced Piano Techniques",
      "description": "Enhance your piano playing skills with advanced techniques taught by professional pianists. This webinar covers intricate finger exercises, dynamics, and interpretation to elevate your performance.",
      "slug": "advanced-piano-techniques",
      "isFeatured": true
    },
    {
      "title": "Drumming Fundamentals",
      "description": "Get back to basics with our drumming fundamentals webinar. Perfect for beginners and intermediate drummers looking to solidify their technique and improve their rhythm.",
      "slug": "drumming-fundamentals",
      "isFeatured": false
    }
  ]




function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={FeaturedWebinars.map(webinar => (
          {
            title : webinar.title,
            description : webinar.description,
            link : '/'
          }
        ))} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Webinars</Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
