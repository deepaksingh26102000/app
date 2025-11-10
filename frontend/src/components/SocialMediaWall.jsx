import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, MessageCircle } from 'lucide-react';
import writeOnTwitter from '@/utils/writeOnTwitter';

const getPlatformColor = (platform) => {
  switch (platform) {
    case 'twitter':
      return 'bg-blue-400';
    case 'instagram':
      return 'bg-gradient-to-br from-purple-500 to-pink-500';
    case 'facebook':
      return 'bg-blue-600';
    default:
      return 'bg-gray-500';
  }
};

const SOCIAL_ICONS = {
  Twitter: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 .64a4.48 4.48 0 00-4.4 5.52A12.94 12.94 0 013 2.24s-4 9 5 13a13.06 13.06 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.1a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5a3 3 0 013.2-3.3c.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-2v7A10 10 0 0022 12z"/>
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M19.8 7.2c-.2-1.4-1.4-2.5-2.8-2.7C14.6 4 12 4 12 4s-2.6 0-4.9.5c-1.4.2-2.6 1.3-2.8 2.7C4 9.5 4 12 4 12s0 2.5.3 4.8c.2 1.4 1.4 2.5 2.8 2.7C9.4 20 12 20 12 20s2.6 0 4.9-.5c1.4-.2 2.6-1.3 2.8-2.7.3-2.3.3-4.8.3-4.8s0-2.5-.3-4.8zM10 15V9l5 3-5 3z"/>
    </svg>
  )
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const SocialMediaWall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSocialPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/social_posts`);
        const k = await response.json();
        setData(k);
      } catch (error) {
        console.error("Error fetching social_posts:", error);
      }
    };
    fetchSocialPosts();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Social Media Wall
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            See what supporters are saying across India
          </p>
          <div className="inline-block bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-semibold">
            Tag your posts with <span className="text-orange-600">#MeraPMRahul</span> to appear here!
          </div>
        </div>

        {/* Social Feed Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {data?.map((post) => (
            <Card key={post?.id} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${getPlatformColor(post?.platform)} flex items-center justify-center text-white font-bold text-sm`}>
                    {SOCIAL_ICONS[capitalize(post?.platform)] || post?.platform?.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{post?.username}</p>
                    <p className="text-sm text-gray-500">{post?.readable_date?.toString()}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{post?.content}</p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center">
                    <Heart size={18} className="mr-1" />
                    <span className="text-sm">{post?.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle size={18} className="mr-1" />
                    <span className="text-sm">Reply</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hashtag Showcase */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Join the Conversation
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['#MeraPMRahul', '#TruthOverFear', '#BharatJodoYatra', '#NyayKiRaajneeti', '#RahulGandhi'].map((tag) => (
              <span
                key={tag}
                onClick={()=>writeOnTwitter(tag)}
                className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600">
            Share your voice on social media and be part of the movement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWall;
