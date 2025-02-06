import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FadeInFromBottomProps {
  children: React.ReactNode;
}

const FadeInFromBottom: React.FC<FadeInFromBottomProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // Track if the animation has already occurred

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    // Check if the div is entering from the bottom of the viewport
    const enteringFromBottom = rect.top < window.innerHeight && rect.bottom > 0;

    // Check if the div has left the viewport from the bottom
    const isLeavingFromBottom = rect.bottom < 0;

    // Trigger animation only if entering from the bottom
    if (enteringFromBottom && !hasAnimated.current) {
      controls.start({ opacity: 1, y: 0 });
      hasAnimated.current = true; // Set the flag to true after animation
    } else if (isInView) {
      // Ensure the item is visible if already in view on load
      controls.start({ opacity: 1, y: 0 });
    } else if (isLeavingFromBottom) {
      // Reset hasAnimated when leaving from the bottom
      hasAnimated.current = false; // Allow for animation again when re-entering
    }
  };

  useEffect(() => {
    // Check initial visibility on load
    const rect = ref.current?.getBoundingClientRect();
    const isInitiallyInView = rect ? rect.top >= 0 && rect.bottom <= window.innerHeight : false;

    if (isInitiallyInView) {
      controls.start({ opacity: 1, y: 0 }); // Set it to visible if in view initially
      hasAnimated.current = true; // Mark as animated
    } else {
      controls.start({ opacity: 0, y: 50 }); // Set initial state hidden
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div ref={ref} animate={controls} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default FadeInFromBottom;