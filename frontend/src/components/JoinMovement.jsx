import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Heart, Users, Building2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const JoinMovement = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', state: '' });
  const [supporterCard, setSupporterCard] = useState(null);

  const categories = [
    {
      id: 'supporter',
      icon: Heart,
      title: 'Supporters',
      titleHindi: 'समर्थक',
      description: 'Citizens and admirers of Rahul Gandhi',
      color: 'from-red-500 to-pink-500',
      buttonText: 'Sign the Pledge'
    },
    {
      id: 'volunteer',
      icon: Users,
      title: 'Volunteers',
      titleHindi: 'स्वयंसेवक',
      description: 'People ready to work online or on ground',
      color: 'from-blue-600 to-cyan-500',
      buttonText: 'Become a Volunteer'
    },
    {
      id: 'worker',
      icon: Building2,
      title: 'Congress Workers',
      titleHindi: 'कांग्रेस कार्यकर्ता',
      description: 'Party cadre and campaigners',
      color: 'from-green-600 to-emerald-500',
      buttonText: 'Connect Your Booth'
    }
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const card = {
      ...formData,
      mobile_number: formData.phone,
      category: selectedCategory,
    };

    const API_ENDPOINT = `${BASE_URL}/user`;

    try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

    const result = await response.json();

    if (response.ok) {
      setSupporterCard(card);
      setFormData({ name: "", email: "", phone: "", state: "" });
    } else {
      console.error("❌ Backend error:", result.error);
      alert("Failed to save supporter. Please try again.");
    }
  } catch (err) {
    console.error("⚠️ Network error:", err);
    alert("Something went wrong. Please check your connection.");
  }
  };

  const downloadCard = () => {
    alert('Digital Supporter Card will be downloaded. Feature will be implemented in backend phase.');
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-700">
            Be part of India's largest people-driven political movement for truth and justice.
          </p>
          <p className="text-lg text-blue-700 font-medium mt-2">
            भारत के सबसे बड़े जन आंदोलन का हिस्सा बनें
          </p>
        </div>

        {/* Three Entry Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="card-hover border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <CardHeader>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
                  <CardDescription className="text-center text-blue-700 font-medium">
                    {category.titleHindi}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">
                    {category.description}
                  </p>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-6"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={selectedCategory !== null} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-900">
              {selectedCategory === 'supporter' && 'Sign the Pledge'}
              {selectedCategory === 'volunteer' && 'Become a Volunteer'}
              {selectedCategory === 'worker' && 'Connect Your Booth'}
            </DialogTitle>
            <DialogDescription>
              Fill in your details to join the movement. You'll receive a digital supporter card.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                required
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="Your state"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
              Submit & Get Supporter Card
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Supporter Card Display */}
      <Dialog open={supporterCard !== null} onOpenChange={() => setSupporterCard(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-900">
              Welcome to the Movement! 🎉
            </DialogTitle>
          </DialogHeader>

          {supporterCard && (
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-white shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Digital Supporter Card</h3>
                <p className="text-blue-200">डिजिटल समर्थक कार्ड</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <p className="text-sm text-blue-200 mb-1">Name</p>
                <p className="text-xl font-bold mb-4">{supporterCard.name}</p>
                <p className="text-sm text-blue-200 mb-1">State</p>
                <p className="text-lg font-semibold mb-4">{supporterCard.state}</p>
                <p className="text-sm text-blue-200 mb-1">Supporter ID</p>
                <p className="text-lg font-mono">{supporterCard.id}</p>
              </div>
              <div className="text-center text-sm text-blue-200">
                Joined on {supporterCard.date}
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button onClick={downloadCard} className="flex-1 bg-orange-500 hover:bg-orange-600">
              Download Card
            </Button>
            <Button variant="outline" className="flex-1">
              Share on WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default JoinMovement;
