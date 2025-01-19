'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Frequently Asked Questions
        </h2>

        {[
          {
            question: 'How does the mentorship process work?',
            answer:
              'Browse our mentor profiles, select someone whose expertise matches your needs, and book a session through their calendar. Each mentor sets their own rates and availability.',
          },
          {
            question: 'What happens after I book a session?',
            answer:
              "You'll receive a confirmation email with the meeting link and any preparation materials your mentor recommends. Sessions are conducted via video call.",
          },
          {
            question: 'How are mentors verified?',
            answer:
              'All mentors go through a thorough verification process including background checks, experience verification, and reference checks to ensure quality mentorship.',
          },
          {
            question: 'What if I need to reschedule?',
            answer:
              "You can reschedule your session up to 24 hours before the scheduled time through your mentor's calendar link. Late cancellations may be subject to the mentor's policy.",
          },
        ].map((faq, index) => (
          <div key={index} className='mb-4'>
            <button
              className='w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50'
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className='font-medium text-left'>{faq.question}</span>
              {openFaq === index ? (
                <ChevronUp className='h-5 w-5 text-gray-500' />
              ) : (
                <ChevronDown className='h-5 w-5 text-gray-500' />
              )}
            </button>
            {openFaq === index && (
              <div className='p-4 bg-white border-t'>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
