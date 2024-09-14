# Magnetic Effect

This project demonstrates an interactive magnetic effect using GSAP and Javascript. The effect creates a unique user experience by attracting elements towards the cursor, simulating a magnetic pull.

## Features

- Custom cursor follower
- Magnetic effect on button hover
- Responsive design
- Smooth animations using GSAP

## How It Works

1. **Cursor Follower**: The `cursorFollower()` function uses GSAP to animate a custom cursor element, following the user's mouse movements.

2. **Magnetic Effect**: The `magnetEffect()` function creates the magnetic attraction effect on the specified element (in this case, the "Explore" button).
   - It calculates the button's dimensions and position.
   - On mousemove, it interpolates the cursor's position relative to the button.
   - The button is then animated towards the cursor using GSAP.
   - The custom cursor is scaled up when hovering over the button.

## Customization
- Modify the magnetic effect strength by adjusting the interpolation values in the `magnetEffect()` function.