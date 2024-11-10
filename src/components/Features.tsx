import React from 'react';
import { BookOpen, Globe, Activity, Monitor, Users, Calendar, Map, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <BookOpen className="h-6 w-6" />, title: "21st Century Life Skills", description: "Preparing students for the future with modern skills" },
    { icon: <Globe className="h-6 w-6" />, title: "English for Global Citizens", description: "Comprehensive English language education" },
    { icon: <Activity className="h-6 w-6" />, title: "Activity-Based Learning", description: "Interactive and engaging learning experiences" },
    { icon: <Monitor className="h-6 w-6" />, title: "A/C Digital Classrooms", description: "Modern facilities with digital learning tools" },
    { icon: <Users className="h-6 w-6" />, title: "Separate Playschool Floor", description: "Dedicated space for early childhood education" },
    { icon: <Calendar className="h-6 w-6" />, title: "Regular Feedback", description: "Continuous assessment and parent communication" },
    { icon: <Map className="h-6 w-6" />, title: "Field Trips & Celebrations", description: "Experiential learning opportunities" },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Conceptual Worksheets", description: "Comprehensive learning materials" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Integrated Child Development and Learning System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}