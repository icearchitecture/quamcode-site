'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamic import for Spline Scene
const SplineScene = dynamic(() => import('../components/SplineScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black animate-pulse" />
});

// API Card Component
const APICard = ({ api, index }: { api: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, z: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div className={`
        relative p-6 rounded-2xl backdrop-blur-xl border border-white/10
        ${isHovered ? 'bg-white/10' : 'bg-white/5'}
        transition-all duration-300 cursor-pointer
      `}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{api.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs ${api.color} bg-white/10`}>
            {api.category}
          </span>
        </div>
        <p className="text-white/70 text-sm mb-4">{api.description}</p>
        <div className="flex flex-wrap gap-2">
          {api.features.map((feature: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 rounded-lg bg-white/5 text-white/60">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const apis = [
    {
      name: 'OpenAI',
      category: 'AI',
      color: 'text-green-400',
      description: 'Advanced language models for text generation and analysis',
      features: ['GPT-4', 'DALL-E', 'Whisper']
    },
    {
      name: 'Anthropic',
      category: 'AI',
      color: 'text-blue-400',
      description: 'Claude AI for safe and helpful conversations',
      features: ['Claude 3', 'Constitutional AI', 'Long Context']
    },
    {
      name: 'ElevenLabs',
      category: 'Voice',
      color: 'text-purple-400',
      description: 'Realistic voice synthesis and cloning',
      features: ['Voice Cloning', 'Multi-language', 'Emotion Control']
    },
    {
      name: 'Stripe',
      category: 'Payment',
      color: 'text-indigo-400',
      description: 'Payment processing and financial infrastructure',
      features: ['Subscriptions', 'Invoicing', 'Global Payments']
    },
    {
      name: 'Twilio',
      category: 'Communication',
      color: 'text-red-400',
      description: 'SMS, Voice, and Video communication APIs',
      features: ['SMS', 'Voice Calls', 'Video Chat']
    },
    {
      name: 'Google Maps',
      category: 'Location',
      color: 'text-yellow-400',
      description: 'Mapping and location-based services',
      features: ['Geocoding', 'Directions', 'Places API']
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

      {/* SOLOMON Background Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center z-5"
      >
        <h1 className="text-[20vw] font-bold text-white select-none">
          SOLOMON
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build with{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Connect your apps with cutting-edge APIs. Create experiences that feel alive.
          </p>
        </motion.div>

        {/* API Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {apis.map((api, index) => (
            <APICard key={api.name} api={api} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10">Start Building</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
}