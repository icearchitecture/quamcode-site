# Animation & 3D Setup Guide

## ✅ Installed Packages
- **Framer Motion**: Advanced animations
- **Spline React**: 3D scenes and characters
- **Spline Runtime**: 3D interaction support

## 🎨 Framer Motion Quick Start

```tsx
import { motion } from 'framer-motion';

// Animate anything:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 🌐 Spline Integration

### 1. Export from Spline
1. Open your Spline project
2. Click "Export" → "Code" → "React"
3. Copy the URL (looks like: https://prod.spline.design/XXXXX/scene.splinecode)

### 2. Add to Your Site
```tsx
import Spline from '@splinetool/react-spline';

<Spline scene="YOUR_SPLINE_URL" />
```

## 🎭 Character with Voice Setup

### Spline Character
1. Create character in Spline
2. Add animations/interactions
3. Export with interactions enabled

### Voice Integration Options
1. **ElevenLabs** - Most realistic
2. **Web Speech API** - Free, built-in
3. **Amazon Polly** - AWS integration

## 🔗 Account Connections Needed

### Spline
- Sign up: https://spline.design
- Create project
- Get embed URL

### Voice Service (Choose one)
- **ElevenLabs**: https://elevenlabs.io
- **AWS Polly**: Need AWS account
- **Free option**: Use Web Speech API

## 📁 File Structure
```
src/
  components/
    animations/
      HeroAnimation.tsx
      SplineCharacter.tsx
      AnimatedText.tsx
    voice/
      VoiceController.tsx
```

Ready to create your first animated component!
