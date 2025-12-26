# Quick Start Guide - IDE Theme

## What Changed?

Your portfolio has been transformed into a professional IDE/coding-themed website with:

✅ **Three.js animated particle background**
✅ **Code editor-style windows and components**
✅ **Terminal-style animations**
✅ **Neon glow effects**
✅ **Floating code snippets**
✅ **Dark theme with blue/cyan accents**
✅ **Monospace fonts for code elements**
✅ **Scanline effects**

## New Components Created

### 1. Three.js Components
- `src/components/three/CodeBackground.tsx` - Animated particle system
- `src/components/three/MatrixRain.tsx` - Matrix-style code rain (optional)

### 2. UI Components
- `src/components/ui/CodeWindow.tsx` - VS Code-style window
- `src/components/ui/TerminalWindow.tsx` - Terminal with typing animation
- `src/components/ui/IDECard.tsx` - Card with IDE styling
- `src/components/ui/SectionWrapper.tsx` - Section wrapper with code tags
- `src/components/ui/FloatingCode.tsx` - Floating code snippets

### 3. Updated Sections
- `src/components/sections/HeroIDE.tsx` - New hero with code theme
- Updated `Header.tsx` - IDE-style navigation
- Updated `Footer.tsx` - Code-themed footer
- Updated `App.tsx` - Integrated all new components

### 4. Styling
- `src/index.css` - Complete IDE theme with animations

## Running the Project

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Optional Enhancements

### Add Matrix Rain Effect
If you want the matrix-style code rain, add to `App.tsx`:

```tsx
import MatrixRain from './components/three/MatrixRain';

// In the return statement, add:
<MatrixRain />
```

### Adjust Particle Count
In `CodeBackground.tsx`, change line:
```tsx
const particlesCount = 1000; // Increase for more particles
```

### Change Color Scheme
Edit colors in `src/index.css`:
```css
/* Change from blue to green */
.neon-text {
  text-shadow: 
    0 0 5px rgba(34, 197, 94, 0.5),  /* Change to green */
    0 0 10px rgba(34, 197, 94, 0.3),
    0 0 20px rgba(34, 197, 94, 0.2);
}
```

## Customizing Content

### Update Hero Section
Edit `src/components/sections/HeroIDE.tsx`:
- Change typing phrases
- Update code snippet
- Modify social links

### Add More Code Windows
Use the `CodeWindow` component anywhere:

```tsx
<CodeWindow title="myfile.tsx">
  <div className="font-mono text-sm">
    <span className="text-purple-400">const</span>
    <span className="text-blue-400"> myVar</span>
    <span className="text-gray-500"> = </span>
    <span className="text-green-400">"value"</span>
  </div>
</CodeWindow>
```

## Performance Tips

1. **Reduce particles** if performance is slow (in CodeBackground.tsx)
2. **Disable effects** on mobile by adding media queries
3. **Use production build** for best performance

## Browser Compatibility

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Requires:
- WebGL support
- CSS backdrop-filter support
- Modern JavaScript (ES6+)

## Troubleshooting

### Three.js not loading?
Make sure dependencies are installed:
```bash
npm install three @types/three
```

### Animations laggy?
Reduce particle count in `CodeBackground.tsx`

### Colors not showing?
Check if dark mode is enabled in your browser

## Next Steps

1. Test the site: `npm run dev`
2. Customize colors and content
3. Add your own code snippets
4. Deploy to production

Enjoy your new IDE-themed portfolio! 🚀
