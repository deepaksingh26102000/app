import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { FileVideo, Image as ImageIcon, Headphones, FileText, Download } from 'lucide-react';
import { mockData } from '../mock';

const getIcon = (type) => {
  switch (type) {
    case 'video':
      return FileVideo;
    case 'image':
      return ImageIcon;
    case 'audio':
      return Headphones;
    case 'document':
      return FileText;
    default:
      return FileText;
  }
};

const getColor = (type) => {
  switch (type) {
    case 'video':
      return 'from-red-500 to-pink-500';
    case 'image':
      return 'from-purple-500 to-indigo-500';
    case 'audio':
      return 'from-green-500 to-teal-500';
    case 'document':
      return 'from-blue-500 to-cyan-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const MediaLibrary = () => {
  const [data, setData] = useState([]);
  const [featuredMedia, setFeaturedMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`${BASE_URL}/media`);
        const k = await response.json();
        setData(k);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    const fetchFeaturedMedia = async () => {
      try {
        const response = await fetch(`${BASE_URL}/featured_media`);
        const k = await response.json();
        setFeaturedMedia(k?.[0]);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchFeaturedMedia();
    fetchMedia();
  }, []);


  return (
    <section id="media" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Media and Resource Library
          </h2>
          <p className="text-xl text-gray-700">
            Download campaign materials, speeches, and social media toolkits
          </p>
          <p className="text-lg text-blue-700 font-medium mt-2">
            प्रचार सामग्री और संसाधन
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((resource) => {
            const Icon = getIcon(resource?.type);
            const colorClass = getColor(resource?.type);
            return (
              <Card key={resource?.id} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-lg">{resource?.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {resource?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => window.open(resource?.download_url, '_blank')}  
                    className="w-full border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold"
                  >
                    <Download className="mr-2" size={16} />
                    Download
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Content */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1703192103626-1433302256e5"
                alt="Bharat Jodo Yatra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-12 flex flex-col justify-center text-white">
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                Featured Resource
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredMedia?.title}</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {featuredMedia?.description}
              </p>
              <Button
                size="lg"
                onClick={() => window.open(featuredMedia?.download_url, '_blank')}
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold w-fit"
              >
                <FileVideo className="mr-2" size={20} />
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaLibrary;
