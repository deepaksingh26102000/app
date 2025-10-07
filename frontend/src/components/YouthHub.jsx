import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Target, Award, Users } from 'lucide-react';

const YouthHub = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Campus Ambassador Program',
      description: 'Lead the movement in your college or university',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Online Challenges',
      description: 'Participate in campaigns and social media drives',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Earn Badges',
      description: 'Get recognized as Changemaker or Campus Captain',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Local Outreach',
      description: 'Organize youth meetups and discussion forums',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="youth" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Youth and Student Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Campus for Change
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Students and young professionals - your voice matters!
          </p>
          <p className="text-lg text-blue-700 font-medium">
            युवाओं का भारत, बदलाव का भारत
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-white mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">890+</p>
              <p className="text-blue-200">Campus Ambassadors</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">250+</p>
              <p className="text-blue-200">Colleges Reached</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15K+</p>
              <p className="text-blue-200">Student Supporters</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">120+</p>
              <p className="text-blue-200">Youth Events</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1723056416947-4ca0f01c229a"
                  alt="Youth Movement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Ready to Lead Change?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Register as a campus ambassador and bring the voice of youth to India's political conversation.
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full md:w-auto"
                >
                  Register as Campus Ambassador
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouthHub;
