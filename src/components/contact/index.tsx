import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold mb-6'>
              Get Started with Mentorship
            </h2>
            <p className='text-gray-600 mb-8'>
              Fill out this form and we&apos;ll help match you with the perfect
              mentor for your needs.
            </p>

            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-medium mb-4'>
                  Contact Us Directly:
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <Mail className='h-5 w-5 text-blue-600 mr-3' />
                    <span>support@ascendly.com</span>
                  </div>
                  <div className='flex items-center'>
                    <Phone className='h-5 w-5 text-blue-600 mr-3' />
                    <span>+91 8237324467</span>
                  </div>
                  <div className='flex items-center'>
                    <MapPin className='h-5 w-5 text-blue-600 mr-3' />
                    <span>
                      Ultra residency, Moshi, Pimpri Chinchwad - 412105
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className='p-6'>
              <form
                action='https://formspree.io/f/your-form-id'
                method='POST'
                className='space-y-6'
              >
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Your Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    required
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Company/Startup Name
                  </label>
                  <input
                    type='text'
                    name='company'
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Industry
                  </label>
                  <select
                    name='industry'
                    className='w-full p-2 border border-gray-300 rounded-md'
                  >
                    <option value=''>Select Industry</option>
                    <option value='SaaS'>SaaS</option>
                    <option value='E-commerce'>E-commerce</option>
                    <option value='Fintech'>Fintech</option>
                    <option value='Healthcare'>Healthcare</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    What kind of mentorship are you looking for? *
                  </label>
                  <textarea
                    name='mentorship_needs'
                    required
                    rows={4}
                    className='w-full p-2 border border-gray-300 rounded-md'
                    placeholder="Tell us about your goals and what kind of mentor you're looking for..."
                  ></textarea>
                </div>

                <Button type='submit' className='w-full'>
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
