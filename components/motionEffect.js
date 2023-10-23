import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export const HoverScaleText = ({ children }) => {
    const [props, set] = useSpring(() => ({
      scale: 1
    }));
  
    return (
      <animated.div
        style={props}
        onMouseEnter={() => set({ scale: 1.2 })}
        onMouseLeave={() => set({ scale: 1 })}
      >
        {children}
      </animated.div>
    );
  };
  
