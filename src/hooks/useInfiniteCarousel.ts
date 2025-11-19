// useInfiniteCarousel.ts (Create this file)

import React, { useState, useEffect, useRef } from "react";

// Hook to handle the infinite auto-playing carousel logic
export const useInfiniteCarousel = (
  itemCount: number,
  itemsPerSlide: number = 3
) => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at index 1 (first real slide)
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalRealSlides = Math.ceil(itemCount / itemsPerSlide);
  const totalCarouselSlides = totalRealSlides + 2; // Includes one duplicate at start and end

  // --- Auto-play Logic ---
  useEffect(() => {
    // If auto-play is enabled and mouse is not hovering
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;

          if (nextSlide >= totalCarouselSlides) {
            // 1. Move immediately (without transition) to the first real slide (index 1)
            // 2. We use setTimeout to match the CSS transition duration
            setTimeout(() => {
              setIsTransitioning(false); // Enable transition
              setCurrentSlide(1); // Jump to first real slide
            }, 700); // Wait for the visual transition to complete

            setIsTransitioning(true); // Temporarily disable transition for jump
            return totalCarouselSlides - 1; // Return the last duplicate index
          }

          return nextSlide;
        });
      }, 4000);
    } else {
      // Clear interval when hovered
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      // Cleanup on unmount
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, totalCarouselSlides]);

  // --- Navigation Logic ---
  const navigate = (direction: "next" | "prev") => {
    // Clear auto-play when navigating manually
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    setCurrentSlide((prev) => {
      let nextSlide = prev + (direction === "next" ? 1 : -1);

      if (nextSlide >= totalCarouselSlides) {
        // Jump from last duplicate back to first real slide (index 1)
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(1);
        }, 700);
        setIsTransitioning(true);
        return totalCarouselSlides - 1; // Go to last duplicate
      }

      if (nextSlide <= 0) {
        // Jump from first duplicate back to last real slide (index totalRealSlides)
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(totalRealSlides);
        }, 700);
        setIsTransitioning(true);
        return 1; // Go to first duplicate
      }

      return nextSlide;
    });
  };

  // Calculate the currently active real slide index (0-based) for the progress indicator
  const activeDotIndex = currentSlide > totalRealSlides ? 0 : currentSlide - 1;
  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };
  const transitionClass = isTransitioning ? "transition-none" : "";

  return {
    navigate,
    nextSlide: () => navigate("next"),
    prevSlide: () => navigate("prev"),
    setIsHovered,
    slideStyle,
    transitionClass,
    activeDotIndex,
    totalRealSlides,
    totalCarouselSlides,
  };
};
