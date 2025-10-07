import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const SocialMediaWall = () => {
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
          {mockData.socialFeed.map((post) => (
            <Card key={post.id} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${getPlatformColor(post.platform)} flex items-center justify-center text-white font-bold text-sm`}>
                    {post.platform[0].toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{post.username}</p>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center">
                    <Heart size={18} className="mr-1" />
                    <span className="text-sm">{post.likes}</span>
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
