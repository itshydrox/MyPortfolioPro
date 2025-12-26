# Component Usage Examples

## CodeWindow Component

### Basic Usage
```tsx
import CodeWindow from '../ui/CodeWindow';

<CodeWindow title="example.tsx">
  <div className="font-mono text-sm space-y-1">
    <div className="flex">
      <span className="text-gray-600 mr-4">1</span>
      <span className="text-purple-400">const</span>
      <span className="text-blue-400"> greeting</span>
      <span className="text-gray-500"> = </span>
      <span className="text-green-400">"Hello World"</span>
    </div>
  </div>
</CodeWindow>
```

### With Syntax Highlighting
```tsx
<CodeWindow title="component.tsx">
  <div className="font-mono text-sm space-y-1">
    <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">"react"</span></div>
    <div><span className="text-purple-400">export default function</span> <span className="text-yellow-400">Component</span>() {'{'}</div>
    <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-gray-400">{'<div>Hello</div>'}</span></div>
    <div>{'}'}</div>
  </div>
</CodeWindow>
```

## TerminalWindow Component

### Basic Usage
```tsx
import TerminalWindow from '../ui/TerminalWindow';

<TerminalWindow 
  commands={[
    'npm install',
    'npm run dev',
    'Server running on port 3000...'
  ]}
/>
```

### Custom Commands
```tsx
<TerminalWindow 
  commands={[
    'git clone repo.git',
    'cd project',
    'npm install',
    '✓ Installation complete!'
  ]}
  className="max-w-2xl"
/>
```

## IDECard Component

### Basic Card
```tsx
import IDECard from '../ui/IDECard';
import { Code } from 'lucide-react';

<IDECard 
  title="feature.tsx"
  icon={<Code size={18} />}
>
  <h3 className="text-xl font-bold text-gray-200 mb-2">Feature Title</h3>
  <p className="text-gray-400">Feature description goes here.</p>
</IDECard>
```

### With Delay Animation
```tsx
<div className="grid md:grid-cols-3 gap-6">
  <IDECard title="card1.tsx" icon={<Code />} delay={0}>
    <p>First card</p>
  </IDECard>
  <IDECard title="card2.tsx" icon={<Code />} delay={0.2}>
    <p>Second card</p>
  </IDECard>
  <IDECard title="card3.tsx" icon={<Code />} delay={0.4}>
    <p>Third card</p>
  </IDECard>
</div>
```

## SectionWrapper Component

### Basic Section
```tsx
import SectionWrapper from '../ui/SectionWrapper';

<SectionWrapper id="about" title="About Me">
  <p className="text-gray-400">Your content here...</p>
</SectionWrapper>
```

### Without Title
```tsx
<SectionWrapper id="custom" className="bg-[#1e1e1e]/30">
  <div className="grid md:grid-cols-2 gap-8">
    {/* Your content */}
  </div>
</SectionWrapper>
```

## Complete Section Example

```tsx
import SectionWrapper from '../ui/SectionWrapper';
import IDECard from '../ui/IDECard';
import CodeWindow from '../ui/CodeWindow';
import { Code, Terminal, Database } from 'lucide-react';

const MySection = () => {
  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left side - Cards */}
        <div className="space-y-6">
          <IDECard 
            title="frontend.tsx"
            icon={<Code size={18} />}
            delay={0}
          >
            <h3 className="text-xl font-bold text-gray-200 mb-3">Frontend</h3>
            <p className="text-gray-400 mb-4">
              Building responsive UIs with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm font-mono">
                React
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm font-mono">
                TypeScript
              </span>
            </div>
          </IDECard>

          <IDECard 
            title="backend.tsx"
            icon={<Terminal size={18} />}
            delay={0.2}
          >
            <h3 className="text-xl font-bold text-gray-200 mb-3">Backend</h3>
            <p className="text-gray-400">
              Creating robust APIs with Node.js and Express.
            </p>
          </IDECard>
        </div>

        {/* Right side - Code Window */}
        <div>
          <CodeWindow title="skills.ts">
            <div className="font-mono text-sm space-y-1">
              <div className="flex">
                <span className="text-gray-600 mr-4">1</span>
                <span className="text-purple-400">const</span>
                <span className="text-blue-400"> skills</span>
                <span className="text-gray-500"> = {'{'}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4">2</span>
                <span className="ml-4 text-blue-300">frontend</span>
                <span className="text-gray-500">: [</span>
                <span className="text-green-400">"React"</span>
                <span className="text-gray-500">],</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4">3</span>
                <span className="ml-4 text-blue-300">backend</span>
                <span className="text-gray-500">: [</span>
                <span className="text-green-400">"Node.js"</span>
                <span className="text-gray-500">]</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4">4</span>
                <span className="text-gray-500">{'}'}</span>
              </div>
            </div>
          </CodeWindow>
        </div>
      </div>
    </SectionWrapper>
  );
};
```

## Styling Tips

### Syntax Highlighting Classes
```tsx
// Keywords (const, function, import, export)
<span className="text-purple-400">const</span>

// Function names
<span className="text-yellow-400">myFunction</span>

// Strings
<span className="text-green-400">"Hello World"</span>

// Comments
<span className="text-gray-500 italic">// Comment</span>

// Variables
<span className="text-blue-400">variableName</span>

// Numbers
<span className="text-orange-400">42</span>

// Operators
<span className="text-gray-500">=</span>
```

### Neon Effects
```tsx
// Neon text
<h1 className="neon-text">Glowing Text</h1>

// Neon border
<div className="neon-border p-4">Content</div>

// Custom glow
<div className="shadow-[0_0_30px_rgba(59,130,246,0.5)]">
  Glowing box
</div>
```

### Code Tags
```tsx
// HTML-style tags
<span className="text-blue-400">{'<section>'}</span>
<span className="text-blue-400">{'</section>'}</span>

// Comment style
<span className="text-blue-400">{'// '}</span>
<span className="text-gray-400">Your text</span>
```

## Animation Examples

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  className="cursor-pointer"
>
  Hover me
</motion.div>
```

### Staggered Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## Best Practices

1. **Use monospace fonts** for code elements: `font-mono`
2. **Add line numbers** for code windows: `<span className="text-gray-600 mr-4">1</span>`
3. **Consistent spacing** in code: Use `space-y-1` for lines
4. **Delay animations** for multiple cards: `delay={0.2 * index}`
5. **Keep syntax highlighting** consistent across components
6. **Use semantic colors**: Blue for variables, purple for keywords, etc.
7. **Add hover effects** to interactive elements
8. **Optimize performance**: Use `viewport={{ once: true }}` for scroll animations
