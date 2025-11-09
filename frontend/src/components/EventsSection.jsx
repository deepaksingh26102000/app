import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { mockData } from '../mock';

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const EventsSection = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${BASE_URL}/events`);
        const k = await response.json();
        setData(k);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = selectedState === 'All'
    ? data
    : data.filter(e => e.state === selectedState);

  const handleRSVP = (eventId) => {
    alert(`RSVP recorded for event ${eventId}. Full implementation coming in backend phase.`);
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Events and Calendar
          </h2>
          <p className="text-xl text-gray-700">
            Join us at rallies, meetings, and town halls across India.
          </p>
          <p className="text-lg text-blue-700 font-medium mt-2">
            आपके शहर में आगामी कार्यक्रम
          </p>
        </div>

        {/* State Filter */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <Button
            variant={selectedState === 'All' ? 'default' : 'outline'}
            onClick={() => setSelectedState('All')}
            className={selectedState === 'All' ? 'bg-blue-900' : ''}
          >
            All States
          </Button>
          {['Delhi', 'Maharashtra', 'Uttar Pradesh'].map((state) => (
            <Button
              key={state}
              variant={selectedState === state ? 'default' : 'outline'}
              onClick={() => setSelectedState(state)}
              className={selectedState === state ? 'bg-blue-900' : ''}
            >
              {state}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents?.map((event) => (
            <Card key={event.id} className="card-hover border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900 mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </CardDescription>
                  </div>
                  <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.state}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="mr-3 text-blue-600" size={20} />
                    <span className="font-medium">
                      {new Date(event.date).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-3 text-blue-600" size={20} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="mr-3 text-blue-600" size={20} />
                    <span className="font-medium">{event?.rsvpCount?.toLocaleString('en-IN')} attending</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <Button
                  onClick={() => handleRSVP(event.id)}
                  className="w-full bg-blue-900 hover:bg-blue-800 font-semibold"
                >
                  RSVP Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
