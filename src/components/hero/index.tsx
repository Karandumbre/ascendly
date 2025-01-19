import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 text-white py-20'>
      {/* Background Animation */}
      <div className='absolute inset-0 opacity-20'>
        <svg
          className='w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid slice'
          viewBox='0 0 100 100'
        >
          <defs>
            <radialGradient id='hero-gradient' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#ffffff' stopOpacity='0.1' />
              <stop offset='100%' stopColor='#ffffff' stopOpacity='0' />
            </radialGradient>
          </defs>
          <rect width='100' height='100' fill='url(#hero-gradient)' />
        </svg>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
        <h1 className='text-5xl md:text-7xl font-extrabold drop-shadow-md'>
          Unlock Your Startup&apos;s Potential
        </h1>
        <p className='mt-6 text-lg md:text-2xl text-gray-100'>
          Connect with industry-leading mentors to elevate your business. Book
          personalized 1:1 sessions and achieve your goals with expert guidance.
        </p>
        <div className='mt-10 flex justify-center gap-4'>
          <button className='px-8 py-4 bg-white text-teal-500 font-semibold text-lg rounded-full hover:bg-gray-100 shadow-lg'>
            Get Started
          </button>
          <button className='px-8 py-4 bg-teal-500 text-white font-semibold text-lg rounded-full hover:bg-teal-400 shadow-lg'>
            Learn More
          </button>
        </div>
      </div>

      {/* Image or Illustration */}
      <div className='relative mt-12 max-w-4xl mx-auto'>
        <Image
          src='/images/hero.webp'
          alt='Mentorship and Growth'
          width={800}
          height={500}
          className='rounded-lg shadow-xl'
        />
      </div>
    </section>
  );
};

export default HeroSection;
