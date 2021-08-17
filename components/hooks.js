import { useEffect, useState, useRef } from 'react';

function useHasEntered(rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [hasEntered, setHasEntered] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setHasEntered(entry.isIntersecting);
          observer.unobserve(ref.current);
          console.log('entered')
        }
      },
      {
        // rootMargin,
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return [ref, hasEntered];

}


export { useHasEntered };