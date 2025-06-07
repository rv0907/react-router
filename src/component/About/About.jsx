import React from "react";
export default function About() {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20'>
      <h2 className='text-4xl font-bold mb-4 text-center text-indigo-800'>
        About Me
      </h2>

      <p className='text-lg leading-8 mb-6'>
        I'm <span className='font-semibold text-black'>Rudraveer Singh</span>, a
        final-year student at NIT with a strong passion for solving problems
        through code. I spend most of my time building apps, debugging bugs (and
        sometimes life), and learning new tech like it’s a sport.
      </p>

      <p className='text-lg leading-8 mb-6'>
        I’m also the{" "}
        <span className='font-semibold text-black'>Content Head at E-Cell</span>
        , where I lead the creative side of campaigns, write content that
        connects, and ensure things don’t sound boring (unless it’s a Monday
        morning class).
      </p>

      <p className='text-lg leading-8 mb-6'>
        When I’m not coding or writing, you’ll probably find me in the gym,
        trying to lift heavy things, or in a quiet corner scribbling down a few
        poetic lines — sometimes about code, sometimes about 8 a.m. lectures,
        sometimes about… Maggi.
      </p>

      <p className='text-lg leading-8'>
        I'm always looking to collaborate on projects, explore new ideas, and
        push myself creatively and technically. Let’s build, write, lift, or
        vibe together — your call.
      </p>
    </div>
  );
}
