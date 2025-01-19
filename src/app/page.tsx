import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';

const MentorshipPlatform = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Navigation bar section here - Same as before */}
      <nav className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <span className='text-2xl font-bold text-blue-600'>Ascendly</span>
            </div>
            <div className='flex items-center space-x-4'>
              <Button variant='ghost'>How It Works</Button>
              <Button variant='ghost'>Browse Mentors</Button>
              <Button variant='ghost'>Contact</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Accelerate Your Startup Growth
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-blue-100'>
            Connect with industry-leading mentors who&apos;ve built successful
            companies
          </p>
          <Button className='bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6'>
            Book Your First Session
          </Button>
        </div>
      </div>

      {/* About Us Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>About Ascendly</h2>
              <p className='text-gray-600 mb-4'>
                Ascendly bridges the gap between ambitious founders and
                experienced mentors. Our platform connects you with industry
                leaders who have walked the path you&apos;re on.
              </p>
              <p className='text-gray-600 mb-4'>
                We believe that every founder deserves access to quality
                mentorship. Our mentors are carefully selected based on their
                experience, success record, and dedication to helping others
                succeed.
              </p>
              <div className='grid grid-cols-2 gap-6 mt-8'>
                <div className='text-center'>
                  <h3 className='text-3xl font-bold text-blue-600'>500+</h3>
                  <p className='text-gray-600'>Successful Matches</p>
                </div>
                <div className='text-center'>
                  <h3 className='text-3xl font-bold text-blue-600'>50+</h3>
                  <p className='text-gray-600'>Expert Mentors</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <div className='bg-gray-200 h-48 rounded-lg'></div>
                <div className='bg-gray-200 h-64 rounded-lg'></div>
              </div>
              <div className='space-y-4 mt-8'>
                <div className='bg-gray-200 h-64 rounded-lg'></div>
                <div className='bg-gray-200 h-48 rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <Contact />
      {/* Footer */}
      <footer className='bg-gray-900 text-gray-300 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Ascendly</h3>
              <p className='text-sm'>Connecting founders with expert mentors</p>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Platform</h4>
              <ul className='space-y-2'>
                <li>How it Works</li>
                <li>Browse Mentors</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Resources</h4>
              <ul className='space-y-2'>
                <li>Blog</li>
                <li>Success Stories</li>
                <li>Become a Mentor</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Contact</h4>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Mail className='w-4 h-4 mr-2' />
                  support@ascendly.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MentorshipPlatform;
