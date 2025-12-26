# 🚀 Quick Reference Card

## Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## Key Files

```
src/App.tsx                          # Main app with all components
src/index.css                        # All styles and animations
src/components/three/CodeBackground  # Three.js particles
src/components/sections/HeroIDE      # New hero section
```

## Quick Customizations

### Change Accent Color
**File**: `src/index.css`
```css
.neon-text {
  text-shadow: 0 0 5px rgba(YOUR_R, YOUR_G, YOUR_B, 0.5);
}
```

### Adjust Particles
**File**: `src/components/three/CodeBackground.tsx`
```tsx
const particlesCount = 1000; // Change number
```

### Enable Matrix Rain
**File**: `src/App.tsx`
```tsx
import MatrixRain from './components/three/MatrixRain';
// Add: <MatrixRain />
```

## Component Quick Use

### CodeWindow
```tsx
<CodeWindow title="file.tsx">
  <span className="text-purple-400">const</span>
  <span className="text-blue-400"> code</span>
</CodeWindow>
```

### TerminalWindow
```tsx
<TerminalWindow commands={['npm install']} />
```

### IDECard
```tsx
<IDECard title="card.tsx" icon={<Code />}>
  Content
</IDECard>
```

## Color Classes

```tsx
text-purple-400  // Keywords
text-yellow-400  // Functions
text-green-400   // Strings
text-gray-500    // Comments
text-blue-400    // Variables
text-orange-400  // Numbers
```

## Animation Classes

```tsx
animate-scan         // Scanline
animate-blink        // Cursor
animate-pulse-slow   // Pulse
neon-text           // Glow text
neon-border         // Glow border
```

## Documentation

- `docs/QUICK_START.md` - Get started
- `docs/COMPONENT_EXAMPLES.md` - Examples
- `docs/VISUAL_GUIDE.md` - Styling
- `docs/README_THEME.md` - Full docs

## Troubleshooting

**Three.js not loading?**
```bash
npm install three @types/three --legacy-peer-deps
```

**Slow performance?**
Reduce particles in `CodeBackground.tsx`

**Build errors?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

## Quick Tips

1. Test: `npm run dev`
2. Customize colors in CSS
3. Adjust particle count
4. Add your content
5. Build: `npm run build`
6. Deploy!

---

**Ready to go! 🚀**
