# Visual Style Guide - IDE Theme

## Color Palette

### Background Colors
```
Primary Background:   #0a0a0a (Near Black)
Secondary Background: #1e1e1e (VS Code Dark)
Panel Background:     #2d2d30 (VS Code Darker)
Overlay Background:   #161b22 (GitHub Dark)
```

### Accent Colors
```
Primary Blue:    #3b82f6 (Tailwind Blue-500)
Cyan Accent:     #06b6d4 (Tailwind Cyan-500)
Terminal Green:  #22c55e (Tailwind Green-500)
Warning Yellow:  #eab308 (Tailwind Yellow-500)
Error Red:       #ef4444 (Tailwind Red-500)
```

### Syntax Colors
```
Keywords:   #a855f7 (Purple-500) - const, function, import
Functions:  #eab308 (Yellow-500) - function names
Strings:    #22c55e (Green-500) - "text"
Comments:   #6b7280 (Gray-500) - // comments
Variables:  #3b82f6 (Blue-400) - variable names
Numbers:    #fb923c (Orange-400) - 123
Operators:  #9ca3af (Gray-400) - =, +, -
```

### Text Colors
```
Primary Text:    #e4e4e7 (Gray-200)
Secondary Text:  #9ca3af (Gray-400)
Muted Text:      #6b7280 (Gray-500)
Heading Text:    #f3f4f6 (Gray-100)
```

### Border Colors
```
Default Border:  rgba(107, 114, 128, 0.3) (Gray-700/30)
Active Border:   rgba(59, 130, 246, 0.5) (Blue-500/50)
Hover Border:    rgba(59, 130, 246, 0.8) (Blue-500/80)
```

## Typography

### Font Families
```css
/* Body Text */
font-family: 'Inter', system-ui, sans-serif;

/* Headings */
font-family: 'Sora', 'Inter', system-ui, sans-serif;

/* Code/Monospace */
font-family: 'Fira Code', 'Consolas', monospace;
```

### Font Sizes
```
Hero Title:      text-5xl md:text-7xl (48px - 72px)
Section Title:   text-4xl md:text-5xl (36px - 48px)
Card Title:      text-xl (20px)
Body Text:       text-base (16px)
Small Text:      text-sm (14px)
Code Text:       text-sm (14px)
Tiny Text:       text-xs (12px)
```

### Font Weights
```
Light:    font-light (300)
Regular:  font-normal (400)
Medium:   font-medium (500)
Semibold: font-semibold (600)
Bold:     font-bold (700)
```

## Spacing System

### Padding
```
Extra Small:  p-2  (8px)
Small:        p-4  (16px)
Medium:       p-6  (24px)
Large:        p-8  (32px)
Extra Large:  p-12 (48px)
```

### Margins
```
Small:   mb-4  (16px)
Medium:  mb-6  (24px)
Large:   mb-8  (32px)
Section: mb-12 (48px)
```

### Gaps
```
Tight:   gap-2 (8px)
Normal:  gap-4 (16px)
Relaxed: gap-6 (24px)
Loose:   gap-8 (32px)
```

## Border Radius

```
Small:  rounded-md  (6px)
Medium: rounded-lg  (8px)
Large:  rounded-xl  (12px)
Full:   rounded-full (9999px)
```

## Shadows

### Box Shadows
```css
/* Subtle */
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)

/* Default */
shadow: 0 1px 3px rgba(0, 0, 0, 0.1)

/* Medium */
shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)

/* Large */
shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)

/* Extra Large */
shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1)

/* 2XL */
shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

### Neon Glow
```css
/* Text Glow */
text-shadow: 
  0 0 5px rgba(59, 130, 246, 0.5),
  0 0 10px rgba(59, 130, 246, 0.3),
  0 0 20px rgba(59, 130, 246, 0.2);

/* Box Glow */
box-shadow: 
  0 0 5px rgba(59, 130, 246, 0.5),
  0 0 10px rgba(59, 130, 246, 0.3),
  inset 0 0 10px rgba(59, 130, 246, 0.1);

/* Hover Glow */
box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
```

## Component Patterns

### Code Window Structure
```
┌─────────────────────────────────┐
│ ● ● ●  filename.tsx             │ ← Header (bg-[#2d2d30])
├─────────────────────────────────┤
│                                 │
│  1  const code = "example";     │ ← Content (bg-[#1e1e1e])
│  2  export default code;        │
│                                 │
└─────────────────────────────────┘
```

### Terminal Window Structure
```
┌─────────────────────────────────┐
│ ● ● ●  terminal                 │ ← Header
├─────────────────────────────────┤
│                                 │
│  $ npm install                  │ ← Commands (green $)
│  $ npm run dev                  │
│  █                              │ ← Cursor
│                                 │
└─────────────────────────────────┘
```

### IDE Card Structure
```
┌─────────────────────────────────┐
│ 🔷 component.tsx        ● ● ●   │ ← Header with icon
├─────────────────────────────────┤
│                                 │
│  Title                          │ ← Content
│  Description text here...       │
│                                 │
│  [Tag] [Tag] [Tag]              │ ← Optional tags
│                                 │
└─────────────────────────────────┘
```

## Animation Timings

### Duration
```
Fast:     duration-200 (200ms)
Normal:   duration-300 (300ms)
Slow:     duration-500 (500ms)
Slower:   duration-700 (700ms)
Slowest:  duration-1000 (1000ms)
```

### Delays
```
None:   delay-0
Short:  delay-100 (100ms)
Medium: delay-200 (200ms)
Long:   delay-300 (300ms)
Longer: delay-500 (500ms)
```

### Easing
```
Linear:     ease-linear
In:         ease-in
Out:        ease-out
In-Out:     ease-in-out
```

## Effects Library

### Hover Effects
```tsx
// Scale up
className="hover:scale-105 transition-transform"

// Lift up
className="hover:-translate-y-2 transition-transform"

// Glow
className="hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"

// Border color
className="hover:border-blue-500 transition-colors"

// Background
className="hover:bg-blue-500/10 transition-colors"
```

### Focus Effects
```tsx
// Ring
className="focus:ring-2 focus:ring-blue-500"

// Outline
className="focus:outline-none focus:border-blue-500"

// Glow
className="focus:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
```

### Active Effects
```tsx
// Scale down
className="active:scale-95"

// Opacity
className="active:opacity-80"
```

## Grid Patterns

### Background Grid
```tsx
<div className="bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
```

### Masked Grid
```tsx
<div className="bg-[linear-gradient(...)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
```

## Backdrop Effects

### Blur
```
backdrop-blur-none: 0px
backdrop-blur-sm:   4px
backdrop-blur:      8px
backdrop-blur-md:   12px
backdrop-blur-lg:   16px
backdrop-blur-xl:   24px
```

### Saturate
```
backdrop-saturate-0:   0%
backdrop-saturate-50:  50%
backdrop-saturate-100: 100%
backdrop-saturate-150: 150%
backdrop-saturate-200: 200%
```

## Opacity Scale

```
opacity-0:   0%
opacity-5:   5%
opacity-10:  10%
opacity-20:  20%
opacity-30:  30%
opacity-40:  40%
opacity-50:  50%
opacity-60:  60%
opacity-70:  70%
opacity-80:  80%
opacity-90:  90%
opacity-100: 100%
```

## Z-Index Layers

```
Background:     -z-10
Base:           z-0
Content:        z-10
Floating:       z-20
Dropdown:       z-30
Sticky:         z-40
Header:         z-50
Overlay:        z-998
Modal:          z-999
Tooltip:        z-9999
```

## Responsive Breakpoints

```
sm:  640px  (Mobile landscape)
md:  768px  (Tablet)
lg:  1024px (Desktop)
xl:  1280px (Large desktop)
2xl: 1536px (Extra large)
```

## Usage Examples

### Neon Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium neon-border hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300">
  Click Me
</button>
```

### Code Tag
```tsx
<span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm font-mono border border-blue-500/30">
  React
</span>
```

### Section Divider
```tsx
<div className="flex items-center gap-3">
  <span className="text-blue-400 font-mono text-sm">{'<section>'}</span>
  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
</div>
```

### Glowing Card
```tsx
<div className="bg-[#1e1e1e]/50 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 p-6 group">
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
  </div>
  Content
</div>
```

## Accessibility

### Focus Visible
```tsx
className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
```

### Screen Reader Only
```tsx
className="sr-only"
```

### ARIA Labels
```tsx
aria-label="Description"
aria-labelledby="element-id"
aria-describedby="description-id"
```

## Performance Tips

1. Use `will-change-transform` for animated elements
2. Prefer `transform` over `top/left` for animations
3. Use `backdrop-filter` sparingly (performance intensive)
4. Limit particle count in Three.js (1000 max recommended)
5. Use `viewport={{ once: true }}` for scroll animations
6. Optimize images and use WebP format
7. Lazy load heavy components
8. Use CSS transforms for GPU acceleration
