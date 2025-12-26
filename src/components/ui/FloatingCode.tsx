import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  'const code = "clean";',
  'function build() {}',
  'npm run dev',
  'git commit -m "feat"',
  'import React from "react"',
  'export default App;',
  'async/await',
  '<Component />',
  'useState()',
  'useEffect()',
];

const FloatingCode: React.FC = () => {
  const [snippets, setSnippets] = useState<Array<{ id: number; text: string; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newSnippets = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setSnippets(newSnippets);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.15, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 10,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
          }}
          className="text-blue-400/30 font-mono text-xs md:text-sm whitespace-nowrap"
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;
