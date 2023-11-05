# motionEffect

## Introduction

> The `motionEffect` module contains the `HoverScaleText` component, a lightweight and reusable React component that applies a scaling animation to its children upon mouse hover events. This component is built using the `@react-spring/web` animation library, which provides fluid and natural animations.

## Component Description: 

### Purpose

The `HoverScaleText` component is designed to enhance user interaction by applying a subtle scale animation to text or any content wrapped within it. The effect increases the scale of the content when a user hovers over it and returns it to its original scale when the hover ends.

### How It Works

- **Animation Hook:** Utilizes the `useSpring` hook to define the scaling animation.
- **Responsive to Events:** Listens to `onMouseEnter` and `onMouseLeave` events to trigger the animation.
- **Animated Wrapper:** Uses the `animated.div` component to apply the animated styles to its children.

### Code Structure

#### Importing Dependencies

```
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
```

#### Component Definition

```
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
```

#### Animation Hook

The `useSpring` hook is initialized with a `scale` property set to `1`, representing the default scale of the content.

#### Event Handlers

- `onMouseEnter`: Triggers the animation to scale up the content by setting the scale to `1.2`.
- `onMouseLeave`: Reverts the animation by resetting the scale to `1`.

#### Animated Wrapper

The `animated.div` is a special wrapper that is capable of animating its style properties. It is provided by the `@react-spring/web` library.

## Usage Example

```
import { HoverScaleText } from './motionEffect';

const ExampleComponent = () => {
  return (
    <HoverScaleText>
      Hover over this text to see the effect!
    </HoverScaleText>
  );
};
```

## Conclusion

The `HoverScaleText` component from the `motionEffect` module is an excellent choice for developers looking to add interactive and engaging hover effects to their React applications. Its simplicity and ease of use make it a versatile tool for enhancing the visual feedback of user interactions.