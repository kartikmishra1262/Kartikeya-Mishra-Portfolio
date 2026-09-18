import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { CSSProperties, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string; 
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
const totalChars = text.length;
let charIndex = 0;

return (
  <p ref={ref} className={className} style={style}>
    {words.map((word, wordIndex) => {
      const startIndex = charIndex;
      charIndex += word.length + 1;

      return (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, i) => (
            <Char
              key={i}
              char={char}
              index={startIndex + i}
              total={totalChars}
              progress={scrollYProgress}
            />
          ))}

          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      );
    })}
  </p>
);
}
