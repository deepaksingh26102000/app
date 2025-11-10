import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, Scale, HandHeart } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Leadership with Compassion',
      titleHindi: 'संवेदना के साथ नेतृत्व',
      description: 'A leader who walks with the people, listens to their pain, and stands for their rights.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Scale,
      title: 'Politics of Justice',
      titleHindi: 'न्याय की राजनीति',
      description: 'Standing firm for equality, fairness, and truth in every corner of India.',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: HandHeart,
      title: 'India that Unites',
      titleHindi: 'एकजुट करने वाला भारत',
      description: 'Bringing people together across differences, building bridges of love and understanding.',
      color: 'from-green-600 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Mera PM Rahul?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-900">Mera PM Rahul</span> is not a campaign, it is a people's declaration.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            When Rahul Gandhi walks, listens, and speaks truth, every Indian sees hope.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="card-hover border-0 shadow-lg overflow-hidden bg-white"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium mb-4">
                    {pillar.titleHindi}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Image with Quote */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <img
            src="https://qfmdmxmcybtllycxygdd.supabase.co/storage/v1/object/public/media/story_1762795485880.png"
            alt="Justice and Unity"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="px-12 max-w-2xl">
              <blockquote className="text-3xl font-bold text-white mb-4 leading-tight">
                "मैं नफरत के बाजार में मोहब्बत की दुकान खोल रहा हूं"
              </blockquote>
              <p className="text-white/90 text-lg">— राहुल गांधी</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-6 text-lg font-semibold shadow-xl"
          >
            Read Rahul's Vision
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
