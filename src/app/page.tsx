'use client';

import { motion, AnimatePresence, useScroll } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamic import for Spline Scene
const SplineScene = dynamic(() => import('../components/SplineScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black animate-pulse" />
});

// Solomon Wave Component
const SolomonWave = ({ isActive, userInput }: { isActive: boolean; userInput: string }) => {
  const generateWaveGradient = (input: string) => {
    // Generate dynamic gradient based on user input
    const hash = input.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue1 = (hash * 137) % 360;
    const hue2 = (hash * 97) % 360;
    return `linear-gradient(${hash % 180}deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%))`;
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute inset-0 z-40 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.1, 1],
            background: generateWaveGradient(userInput)
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.h1 
            className="text-6xl font-bold text-white"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              y: [-10, 10, -10]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hello, I'm Solomon
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Chat Interface Component
const ChatInterface = ({ isExpanded, onClose }: { isExpanded: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="h-full flex flex-col p-6">
            <motion.button
              onClick={onClose}
              className="self-end text-white/60 hover:text-white mb-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>
            <div className="flex-1 flex items-center justify-center">
              <h2 className="text-4xl text-white">Solomon Chat Interface</h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// API Card as Chip Component
interface APIType {
  name: string;
  category: string;
  color: string;
  description: string;
  features: string[];
  icon: string;
}

const APIChip = ({ api, index, onClick, isHidden }: { 
  api: APIType; 
  index: number; 
  onClick: () => void;
  isHidden: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 0 }}
      animate={{ 
        opacity: isHidden ? 0 : 1,
        rotateY: isHidden ? 180 : 360,
        scale: isHidden ? 0.8 : 1,
        z: isHidden ? -100 : 0
      }}
      transition={{ 
        duration: 20, 
        repeat: isHidden ? 0 : Infinity,
        delay: index * 0.2,
        ease: "linear"
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      onClick={onClick}
      className="absolute cursor-pointer"
      style={{
        top: `${30 + (index % 3) * 25}%`,
        left: `${20 + (index % 2) * 60}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className={`
        relative p-6 rounded-full backdrop-blur-xl border-2 border-white/20
        bg-gradient-to-br ${api.color} shadow-2xl
        w-32 h-32 flex flex-col items-center justify-center
      `}>
        <span className="text-4xl mb-2">{api.icon}</span>
        <h3 className="text-sm font-bold text-white">{api.name}</h3>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [showSolomon, setShowSolomon] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 100 && !showSolomon) {
        setShowSolomon(true);
      }
    });
  }, [scrollY, showSolomon]);

  const apis: APIType[] = [
    {
      name: 'OpenAI',
      category: 'AI',
      color: 'from-green-400 to-emerald-600',
      description: 'Advanced language models',
      features: ['GPT-4', 'DALL-E', 'Whisper'],
      icon: '🧠'
    },
    {
      name: 'Lyft',
      category: 'Transport',
      color: 'from-pink-400 to-purple-600',
      description: 'Ride sharing API',
      features: ['Rides', 'Estimates', 'Driver API'],
      icon: '🚗'
    },
    {
      name: 'Stripe',
      category: 'Payment',
      color: 'from-indigo-400 to-purple-600',
      description: 'Payment processing',
      features: ['Payments', 'Subscriptions', 'Connect'],
      icon: '💳'
    },
    {
      name: 'Twilio',
      category: 'Communication',
      color: 'from-red-400 to-orange-600',
      description: 'Communication APIs',
      features: ['SMS', 'Voice', 'Video'],
      icon: '📱'
    },
    {
      name: 'Maps',
      category: 'Location',
      color: 'from-blue-400 to-cyan-600',
      description: 'Location services',
      features: ['Geocoding', 'Routes', 'Places'],
      icon: '🗺️'
    },
    {
      name: 'Weather',
      category: 'Data',
      color: 'from-yellow-400 to-orange-600',
      description: 'Weather data API',
      features: ['Current', 'Forecast', 'Historical'],
      icon: '🌤️'
    }
  ];

  const handleAPIClick = (apiName: string) => {
    setUserInput(apiName);
    setChatExpanded(true);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Spline 3D Background - Now contains the chips */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

      {/* API Chips floating in space */}
      <div className="absolute inset-0 z-20">
        {apis.map((api, index) => (
          <APIChip 
            key={api.name} 
            api={api} 
            index={index}
            onClick={() => handleAPIClick(api.name)}
            isHidden={chatExpanded}
          />
        ))}
      </div>

      {/* Solomon Wave Animation */}
      <SolomonWave isActive={showSolomon && !chatExpanded} userInput={userInput} />

      {/* Main Content */}
      <motion.div 
        className="relative z-30 container mx-auto px-6 py-20"
        animate={{ opacity: chatExpanded ? 0 : 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <motion.span
              animate={{ 
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              You Dream
            </motion.span>
            {', '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              I Build
            </span>
          </h2>
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            You Build, I Dream. Tell Solomon what you need.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white/50 text-sm">Scroll to meet Solomon</div>
          <div className="text-white/50 text-2xl">↓</div>
        </motion.div>
      </motion.div>

      {/* Chat Interface */}
      <ChatInterface 
        isExpanded={chatExpanded} 
        onClose={() => {
          setChatExpanded(false);
          setShowSolomon(false);
        }}
      />
    </div>
  );
}