import { useEffect, useRef } from 'react';
import styles from './ShootingStars.module.css';

const ShootingStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Function to create a shooting star
    const createShootingStar = () => {
      // Create star element
      const star = document.createElement('div');
      star.className = styles.shootingStar;

      // Random position
      const startX = Math.random() * 100; // Random start position (percentage)
      const startY = Math.random() * 100;

      // Calculate movement distance (mostly vertical)
      const moveDistance = 300 + Math.random() * 500; // Distance to travel

      // Determine if star goes up or down (mostly down)
      const goingDown = Math.random() > 0.3; // 70% chance of going down

      // Small horizontal movement (-30 to 30 pixels)
      const moveX = (Math.random() * 90 - 15);

      // Large vertical movement (in the chosen direction)
      const moveY = goingDown ? moveDistance : -moveDistance;

      // Calculate rotation angle based on movement direction
      // atan2 gives us the angle in radians, convert to degrees
      const angle = Math.atan2(moveY, moveX) * (180 / Math.PI);

      // Set CSS variables for the animation
      star.style.setProperty('--moveX', `${moveX}px`);
      star.style.setProperty('--moveY', `${moveY}px`);
      star.style.setProperty('--rotation', `${angle}deg`);

      // Apply initial rotation
      star.style.transform = `rotate(${angle}deg)`;

      // Set initial position
      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;

      // Add to container
      container.appendChild(star);

      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, 1500); // A bit longer than the longest animation duration
    };

    // Create shooting stars at random intervals
    const createStarsInterval = setInterval(() => {
      // Create 1-3 stars at a time
      const starCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < starCount; i++) {
        setTimeout(createShootingStar, Math.random() * 500);
      }
    }, 2000); // Create new stars every 2 seconds

    return () => {
      clearInterval(createStarsInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.starsContainer}
    />
  );
};

export default ShootingStars;
