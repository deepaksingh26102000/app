import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Loader2 } from 'lucide-react';

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

const BASE_URL = process.env.REACT_APP_BACKEND_URL
const API_ENDPOINT = `${BASE_URL}/user`;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData, category: 'contact'}),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for contacting us! We will get back to you soon.');
      }
    } catch (err) {
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-700">
              Have questions? Want to join the movement? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 font-semibold py-6"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                      ):
                      `Send Message`
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">join.merapmrahul@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-900" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 91315 95022</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-900 to-blue-700">
                <CardContent className="p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Follow the Movement</h3>
                  <div className="flex space-x-4">
                    {['Twitter', 'Instagram', 'Facebook', 'YouTube'].map((platform) => (
                      <button
                        key={platform}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors text-xl"
                      >
                        {SOCIAL_ICONS[platform]}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
