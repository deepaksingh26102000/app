import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Award, Calendar, Users, Download, ArrowLeft } from 'lucide-react';
import { mockData } from '../mock';
import { useNavigate } from 'react-router-dom';

const VolunteerZone = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:bg-blue-800 mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold">Volunteer Zone</h1>
          <p className="text-blue-200 mt-2">स्वयंसेवक दशाबोर्ड</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto text-blue-600 mb-3" size={40} />
              <p className="text-3xl font-bold text-blue-900">
                {mockData.volunteerStats.totalVolunteers.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-600 mt-1">Total Volunteers</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <Award className="mx-auto text-green-600 mb-3" size={40} />
              <p className="text-3xl font-bold text-blue-900">
                {mockData.volunteerStats.activeBooths.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-600 mt-1">Active Booths</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto text-purple-600 mb-3" size={40} />
              <p className="text-3xl font-bold text-blue-900">
                {mockData.volunteerStats.campusAmbassadors}
              </p>
              <p className="text-gray-600 mt-1">Campus Ambassadors</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto text-orange-600 mb-3" size={40} />
              <p className="text-3xl font-bold text-blue-900">
                {mockData.volunteerStats.eventsOrganized}
              </p>
              <p className="text-gray-600 mt-1">Events Organized</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar - Tasks */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Your Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { task: 'Coordinate booth meeting in your area', priority: 'High' },
                    { task: 'Share social media content (3 posts)', priority: 'Medium' },
                    { task: 'Register 10 new supporters', priority: 'High' },
                    { task: 'Attend training webinar on Sept 22', priority: 'Medium' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.task}</p>
                        <span className={`text-xs px-2 py-1 rounded-full inline-block mt-2 ${
                          item.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.priority} Priority
                        </span>
                      </div>
                      <Button size="sm" className="bg-blue-900">Mark Done</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Upcoming Events in Your Area</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockData.events.slice(0, 2).map((event) => (
                    <div key={event.id} className="p-4 border-2 border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                      <p className="text-sm text-blue-700">{new Date(event.date).toLocaleDateString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Resources */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Your Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award size={48} className="text-yellow-800" />
                  </div>
                  <p className="text-2xl font-bold mb-2">Nyay Mitra</p>
                  <p className="text-blue-200 text-sm">Level 2 Volunteer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Campaign Kits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Social Media Templates',
                    'Poster Pack (Hindi)',
                    'WhatsApp Forwards',
                    'Speech Guidelines'
                  ].map((kit) => (
                    <Button key={kit} variant="outline" className="w-full justify-between">
                      <span>{kit}</span>
                      <Download size={16} />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Top volunteers this week:</p>
                <div className="space-y-2">
                  {[
                    { name: 'Amit K.', points: 245 },
                    { name: 'Priya S.', points: 198 },
                    { name: 'You', points: 156 }
                  ].map((user, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className={user.name === 'You' ? 'font-bold' : ''}>{user.name}</span>
                      <span className="text-blue-900 font-semibold">{user.points} pts</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerZone;
