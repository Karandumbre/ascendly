import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '../calendly';

const BookingSection = () => {
  const founders = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      calendlyUrl: "https://calendly.com/sarah-ascendly/30min",
      expertise: "Product Strategy, Fundraising",
    },
    {
      name: "Michael Rodriguez",
      role: "Co-founder & CTO",
      calendlyUrl: "https://calendly.com/michael-ascendly/30min",
      expertise: "Technical Architecture, Team Building",
    }
  ];



  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Connect With Ascendly Leadership
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Book a personal session with our founders to learn more about how Ascendly can help accelerate your startup&apos;s growth. Whether you&apos;re interested in becoming a mentor or seeking guidance, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              {founders.map((founder) => (
                <Card key={founder.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{founder.name}</h3>
                        <p className="text-blue-600 font-medium">{founder.role}</p>
                        <p className="text-gray-600 mt-2">Expertise: {founder.expertise}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Interested in Becoming an Expert?
              </h3>
              <p className="text-blue-800 mb-4">
                Share your expertise and help shape the next generation of founders. Join our network of mentors and make a lasting impact.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply as Mentor
              </Button>
            </div>
          </div>

          {/* Calendly Widget Section */}
          <div className="bg-white rounded-xl shadow-lg h-[600px]">
              <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;