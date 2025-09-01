# 🎨 Spline Integration Guide

## How Spline Works with Framer & Code

### 1️⃣ **In Framer (Visual Method)**
1. **In Framer Editor**:
   - Click **Insert** (+) button
   - Choose **Embed**
   - Select **Spline**
   - Paste your Spline scene URL

2. **Get Your Spline URL**:
   - Open Spline.design
   - Create/open your 3D scene
   - Click **Share** → **Public URL**
   - Copy the viewer URL

### 2️⃣ **In Code (Our GitHub Repo)**
We already set this up! The SplineScene component is ready:

```tsx
// src/components/SplineScene.tsx
<iframe 
  src="YOUR_SPLINE_URL_HERE"
  frameBorder="0"
  width="100%"
  height="100%"
/>
```

### 3️⃣ **Spline Scene Ideas for QuamCode**

#### Option A: Floating API Orbs (Recommended)
- 6 colored spheres representing APIs
- Floating animation (up/down)
- Glow effects
- Mouse interaction

#### Option B: Neural Network
- Connected nodes
- Data flow animation
- Interactive connections

#### Option C: Solomon Character
- 3D mascot/avatar
- Idle animations
- Voice-ready mouth movements

## 🚀 Quick Start

### Step 1: Create in Spline
1. Go to: https://spline.design
2. New project
3. Add your 3D elements
4. Animate them
5. Click **Share** → **Get public URL**

### Step 2: Add to Framer
1. In your Framer project
2. Insert → Embed → Spline
3. Paste URL
4. Size and position

### Step 3: Update Code
Tell me your Spline URL and I'll update the code!

## 🔗 Integration Flow

```
Spline (3D Design)
    ↓
Public URL
    ↓
Framer (Visual Layout) + Code (Custom Logic)
    ↓
GitHub (Version Control)
    ↓
Vercel (Live Site)
```

## 💡 Pro Tips

1. **Keep Spline Scenes Light**
   - Under 5MB for fast loading
   - Optimize textures
   - Limit polygon count

2. **Interactions**
   - Mouse follow
   - Click events
   - Scroll animations

3. **Multiple Scenes**
   - Hero background
   - Feature sections
   - Loading animations

---

**Next: Create your first Spline scene!**
