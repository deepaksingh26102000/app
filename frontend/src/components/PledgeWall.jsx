import React, { useState } from 'react';
import CONSTANTS from '../constants';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { MessageSquare, MapPin } from 'lucide-react';
import { mockData } from '../mock';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const BASE_URL = process.env.REACT_APP_BACKEND_URL
const STATES = CONSTANTS.states
const API_ENDPOINT = `${BASE_URL}/user`;

const PledgeWall = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [showPledgeForm, setShowPledgeForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pledgeForm, setPledgeForm] = useState({ name: '', state: '', message: '' });

  const filteredPledges = selectedState === 'All'
    ? mockData.pledges
    : mockData.pledges.filter(p => p.state === selectedState);

  const handlePledgeSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const card = {
      ...pledgeForm,
      pledge: pledgeForm?.message,
    };
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });

      if (response.ok) {
        setShowPledgeForm(false);
        setPledgeForm({ name: '', state: '', message: '' });
        alert('Your pledge has been recorded!');
      }
    } catch (err) {
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section id="pledge" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Pledge Wall - I Believe in Rahul's India
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            मैं सच्चाई और न्याय में विश्वास करता हूं
          </p>
          <Button
            size="lg"
            onClick={() => setShowPledgeForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6"
          >
            <MessageSquare className="mr-2" size={20} />
            Write Your Pledge
          </Button>
        </div>

        {/* India Map Visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Pledges Across India
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mockData.stateData.slice(0, 15).map((stateInfo) => (
              <div
                key={stateInfo.state}
                className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                onClick={() => setSelectedState(stateInfo.state)}
              >
                <div className="flex items-center mb-2">
                  <MapPin className="text-blue-600 mr-2" size={16} />
                  <p className="font-semibold text-sm text-gray-800">{stateInfo.state}</p>
                </div>
                <p className="text-2xl font-bold text-blue-900">
                  {stateInfo.pledges.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-gray-600">pledges</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <Button
            variant={selectedState === 'All' ? 'default' : 'outline'}
            onClick={() => setSelectedState('All')}
            className={selectedState === 'All' ? 'bg-blue-900' : ''}
          >
            All States
          </Button>
          {['Uttar Pradesh', 'Maharashtra', 'Bihar', 'Karnataka', 'Delhi'].map((state) => (
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

        {/* Pledge Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPledges.map((pledge) => (
            <Card key={pledge.id} className="card-hover border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MessageSquare className="text-blue-600 mb-3" size={24} />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{pledge.message}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{pledge.name}</p>
                  <p className="text-sm text-blue-700 flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    {pledge.state}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pledge Form Modal */}
      <Dialog open={showPledgeForm} onOpenChange={setShowPledgeForm}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-blue-900">
              Write Your Pledge
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handlePledgeSubmit} className="space-y-4">
            <div>
              <Label htmlFor="pledge-name">Your Name *</Label>
              <Input
                id="pledge-name"
                required
                value={pledgeForm.name}
                onChange={(e) => setPledgeForm({ ...pledgeForm, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label htmlFor="pledge-state">State *</Label>
              <Select
                required
                value={pledgeForm.state}
                onValueChange={(value) => setPledgeForm({ ...pledgeForm, state: value })}
              >
                <SelectTrigger id="state" className="w-full">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pledge-message">Your Pledge *</Label>
              <Textarea
                id="pledge-message"
                required
                rows={4}
                value={pledgeForm.message}
                onChange={(e) => setPledgeForm({ ...pledgeForm, message: e.target.value })}
                placeholder="I believe in truth and justice. I believe in Rahul Gandhi's India. #MeraPMRahul"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
              Submit Pledge
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PledgeWall;
