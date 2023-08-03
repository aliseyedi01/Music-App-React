import { useState, useEffect, useRef } from "react";

const useLazyLoadImage = (count) => {
  const [isVisible, setIsVisible] = useState(Array(count).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    if (refs.current) {
      refs.current.forEach((ref, index) => {
        if (ref) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target instanceof Element) {
                  setIsVisible((prev) => ({ ...prev, [index]: true }));
                  observer.unobserve(entry.target);
                }
              });
            },
            {
              root: null,
              rootMargin: "50px 0px 0px 0px",
              threshold: 0.01,
            },
          );
          observer.observe(ref);
        }
      });
    }
  }, [refs, count]);

  const registerRef = (ref) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
      setIsVisible((prev) => ({ ...prev, [refs.current.indexOf(ref)]: false }));
    }
  };

  return [registerRef, isVisible];
};

export default useLazyLoadImage;
