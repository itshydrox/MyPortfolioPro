# IDE/Coding Theme Documentation

## Overview
This portfolio now features a professional IDE/code editor theme with Three.js animations, creating a unique and immersive developer experience.

## Key Features

### 1. **Three.js Animated Background**
- Particle system representing code characters
- Interactive grid that responds to mouse movement
- Blue-cyan color scheme matching the coding theme
- Located in: `src/components/three/CodeBackground.tsx`

### 2. **IDE-Style Components**

#### CodeWindow Component
- Mimics VS Code window appearance
- Features window controls (red, yellow, green dots)
- Syntax-highlighted code display
- File tab with customizable title
- Location: `src/components/ui/CodeWindow.tsx`

#### TerminalWindow Component
- Terminal-style command display
- Animated command typing effect
- Green terminal prompt ($)
- Blue command text
- Location: `src/components/ui/TerminalWindow.tsx`

#### IDECard Component
- Card component with IDE window styling
- Hover effects with glow
- Window controls in header
- Customizable icon and title
- Location: `src/components/ui/IDECard.tsx`

### 3. **Visual Effects**

#### Scanline Effect
- Subtle animated scanline across the screen
- Creates retro terminal feel
- Defined in `src/index.css`

#### Neon Glow
- Text and border glow effects
- Blue/cyan color scheme
- Applied to active elements and headings

#### Floating Code Snippets
- Animated code snippets floating across screen
- Random positioning and timing
- Subtle opacity for background effect
- Location: `src/components/ui/FloatingCode.tsx`

### 4. **Color Scheme**

#### Background Colors
- Primary: `#0a0a0a` (near black)
- Secondary: `#1e1e1e` (VS Code dark)
- Tertiary: `#2d2d30` (VS Code darker)

#### Accent Colors
- Blue: `#3b82f6`
- Cyan: `#06b6d4`
- Green (terminal): `#22c55e`
- Purple (keywords): `#a855f7`
- Yellow (functions): `#eab308`

#### Syntax Highlighting
- Keywords: Purple (`text-purple-400`)
- Functions: Yellow (`text-yellow-400`)
- Strings: Green (`text-green-400`)
- Comments: Gray (`text-gray-500`)
- Variables: Blue (`text-blue-400`)
- Numbers: Orange (`text-orange-400`)

### 5. **Typography**
- Primary Font: Inter
- Heading Font: Sora
- Monospace Font: Fira Code (for code elements)

### 6. **Custom Animations**

#### Defined in `src/index.css`:
- `animate-scan` - Scanline effect
- `animate-blink` - Cursor blink
- `animate-pulse-slow` - Slow pulse
- `animate-bounce-soft` - Soft bounce
- `animate-matrix` - Matrix rain effect
- `animate-glitch` - Glitch effect

### 7. **Header Styling**
- Dark background with blur effect
- Neon border on scroll
- Monospace font for navigation
- Blue glow on active section

### 8. **Footer Styling**
- Dark background matching theme
- Code comment style (`//`) for text
- HTML tag style (`<nav>`, `<contact>`) for headings
- Monospace font throughout

## Usage

### Using CodeWindow
```tsx
import CodeWindow from './components/ui/CodeWindow';

<CodeWindow title="example.tsx">
  <div className="font-mono text-sm">
    <span className="text-purple-400">const</span>
    <span className="text-blue-400"> example</span>
    <span className="text-gray-500"> = </span>
    <span className="text-green-400">"Hello World"</span>
  </div>
</CodeWindow>
```

### Using TerminalWindow
```tsx
import TerminalWindow from './components/ui/TerminalWindow';

<TerminalWindow 
  commands={[
    'npm install',
    'npm run dev',
    'Server running...'
  ]}
/>
```

### Using IDECard
```tsx
import IDECard from './components/ui/IDECard';
import { Code } from 'lucide-react';

<IDECard 
  title="component.tsx"
  icon={<Code size={18} />}
  delay={0.2}
>
  <p>Your content here</p>
</IDECard>
```

### Using SectionWrapper
```tsx
import SectionWrapper from './components/ui/SectionWrapper';

<SectionWrapper id="about" title="About Me">
  <p>Section content...</p>
</SectionWrapper>
```

## Customization

### Changing Colors
Edit the color values in `src/index.css` under the `@layer utilities` section.

### Adjusting Animations
Modify animation durations and effects in `src/index.css` under the `@keyframes` definitions.

### Three.js Settings
Adjust particle count, colors, and behavior in `src/components/three/CodeBackground.tsx`.

## Performance Considerations

- Three.js canvas uses `requestAnimationFrame` for smooth 60fps
- Particle count is optimized at 1000 for balance
- Animations use CSS transforms for GPU acceleration
- Backdrop blur effects are optimized for modern browsers

## Browser Support

- Modern browsers with WebGL support
- CSS backdrop-filter support
- ES6+ JavaScript features

## Future Enhancements

Potential additions:
- More Three.js effects (code rain, matrix style)
- Interactive code editor component
- Syntax highlighting for multiple languages
- Dark/light theme toggle with different color schemes
- More terminal commands and interactions
