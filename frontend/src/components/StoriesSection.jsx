import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Quote } from 'lucide-react';
import writeOnTwitter from '@/utils/writeOnTwitter';

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const StoriesSection = () => {
  const [stories, setStories] = useState([]);
  const [featuredStory, setFeaturedStory] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/stories`);
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    const fetchFeaturedStories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/featured_stories`);
        const data = await response.json();
        setFeaturedStory(data?.[0]);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();
    fetchFeaturedStories()
  }, []);

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Stories - Why I Say Mera PM Rahul
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Real voices from farmers, youth, women, teachers, and workers across India.
          </p>
          <p className="text-lg text-blue-700 font-medium">
            हर कहानी सच्चाई की गवाह है
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories?.map((story) => (
            <Card
              key={story?.id}
              className="card-hover overflow-hidden border-0 shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story?.image_url}
                  alt={story?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-xl mb-1">{story?.name}</p>
                  <p className="text-white/90 text-sm flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {story?.city}, {story?.state}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <Quote className="text-blue-600 mr-2 flex-shrink-0" size={20} />
                  <p className="text-gray-700 italic leading-relaxed">
                    {story?.message}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium text-blue-700">{story?.occupation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story of the Week Highlight */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 md:h-auto">
              <img
                src={featuredStory?.image_url}
                alt="Story of the Week"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center text-white">
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                Story of the Week
              </div>
              <h3 className="text-3xl font-bold mb-4">Featured Story</h3>
              <p className="text-xl italic mb-6 leading-relaxed">
                "{featuredStory?.message}"
              </p>
              <div>
                <p className="font-bold text-lg">{featuredStory?.name}</p>
                <p className="text-blue-200">{featuredStory?.city}, {featuredStory?.state}</p>
                <p className="text-sm text-blue-300 mt-1">{featuredStory?.occupation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={writeOnTwitter}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg font-semibold"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
