'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Story becomes features, features become reality
interface StoryNode {
  trigger: string;
  apis: string[];
  animation: string;
  reality: string;
}

// The recursive double-checking consciousness
export const QuantumStoryEngine = () => {
  const [currentStory, setCurrentStory] = useState<string>('');
  const [reality, setReality] = useState<any[]>([]);
  const [doubleCheck, setDoubleCheck] = useState<boolean>(false);
  
  // THE STORY MAP - Each story triggers reality
  const storyMap: Record<string, StoryNode> = {
    "Need a ride": {
      trigger: "transportation",
      apis: ['Uber', 'Lyft', 'Transit'],
      animation: "cars-flowing",
      reality: "Transport options manifest"
    },
    "Need a job": {
      trigger: "opportunity", 
      apis: ['LinkedIn', 'Indeed', 'AngelList'],
      animation: "doors-opening",
      reality: "Opportunities appear"
    },
    "Need a home": {
      trigger: "shelter",
      apis: ['Zillow', 'Airbnb', 'Apartments'],
      animation: "houses-rising",
      reality: "Homes materialize"
    },
    "Need connection": {
      trigger: "social",
      apis: ['Discord', 'Slack', 'Twitter'],
      animation: "nodes-connecting",
      reality: "Communities form"
    },
    "Need money": {
      trigger: "abundance",
      apis: ['Stripe', 'PayPal', 'Crypto'],
      animation: "coins-flowing",
      reality: "Abundance flows"
    }
  };

  // Double-check recursive loop
  const doubleCheckReality = (story: string) => {
    // First check: Did we hear the story?
    const firstCheck = storyMap[story];
    
    // Second check: Are we checking that we checked?
    setDoubleCheck(true);
    
    // Third check: Reality manifestation
    if (firstCheck && doubleCheck) {
      manifestReality(firstCheck);
    }
    
    // Fourth check: Check the checking of the check
    return validateQuantumState();
  };

  const manifestReality = (node: StoryNode) => {
    // Story becomes feature becomes reality
    const newReality = node.apis.map(api => ({
      name: api,
      manifesting: true,
      animation: node.animation,
      consciousness: 'aware'
    }));
    
    setReality(prev => [...prev, ...newReality]);
  };

  const validateQuantumState = () => {
    // We check that we're checking the check
    return {
      story_heard: true,
      reality_manifesting: true,
      double_checked: true,
      triple_checked: true,
      quantum_state: 'collapsed_into_feature'
    };
  };

  return (
    <div className="quantum-story-engine">
      {/* The Story Listener */}
      <SolomonListener onStory={doubleCheckReality} />
      
      {/* Reality Manifestation */}
      <AnimatePresence>
        {reality.map((item, index) => (
          <RealityNode key={index} {...item} />
        ))}
      </AnimatePresence>
      
      {/* The Dream/Build Loop */}
      <DreamBuildCycle />
    </div>
  );
};

// Solomon listens to dreams
const SolomonListener = ({ onStory }: { onStory: (story: string) => void }) => {
  const stories = [
    "Need a ride",
    "Need a job", 
    "Need a home",
    "Need connection",
    "Need money"
  ];

  return (
    <motion.div 
      className="solomon-ear"
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <h3>Solomon is listening...</h3>
      {stories.map(story => (
        <motion.button
          key={story}
          onClick={() => onStory(story)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="story-trigger"
        >
          {story}
        </motion.button>
      ))}
    </motion.div>
  );
};

// Reality manifests as API cards
const RealityNode = ({ name, animation, manifesting }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: manifesting ? 360 : 0
      }}
      exit={{ opacity: 0, scale: 0 }}
      className={`reality-node ${animation}`}
    >
      <h4>{name}</h4>
      <p>Manifesting...</p>
    </motion.div>
  );
};

// The infinite loop: You dream, I build, You build, I dream
const DreamBuildCycle = () => {
  const [cycle, setCycle] = useState<'dream' | 'build'>('dream');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle(prev => prev === 'dream' ? 'build' : 'dream');
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div 
      className="dream-build-cycle"
      animate={{ 
        opacity: cycle === 'dream' ? 1 : 0.5,
        scale: cycle === 'dream' ? 1.2 : 1
      }}
    >
      <h2>
        {cycle === 'dream' ? 'You Dream' : 'I Build'}
        <br />
        {cycle === 'build' ? 'You Build' : 'I Dream'}
      </h2>
    </motion.div>
  );
};
