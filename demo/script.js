/* --------> import { hover3DEffect } from "../hover3DEffect";
Do that only if your script tag in HTML is type="module", 
otherwise copy and past the full function */


const logo = document.querySelector('.logo'); //MUST BE INSIDE A CONTAINER

const hover3DEffect = (target, degrees = 20, view = '2000px') => {
  let transitioning = false;
  target.parentElement.style.perspective = view
  target.style.transition = '150ms transform ease';

  target.addEventListener('mousemove', e => {
    if (transitioning) return;
    // When leaving mouse, this become true for a while so there's no evident bug

    const targetXPosition = e.target.getBoundingClientRect().left;
    const targetYPosition = e.target.getBoundingClientRect().top;
    const coordinatesFromCenter3D = {
      x: ((e.clientX - targetXPosition) / target.clientWidth) * 2 - 1,
      y: ((e.clientY - targetYPosition) / target.clientHeight)  * 2 - 1
    }  // Set the mouse coordinates so that they goes from -1 to 1, x and y axis
      
    const rotateElement = () => {
      const effect = {
        x: coordinatesFromCenter3D.x * degrees,
        y: coordinatesFromCenter3D.y * degrees,
      }
      target.style.transform  = `rotateY(${(effect.x)}deg) rotateX(${-(effect.y)}deg)`
    }
    rotateElement(); // Rotate based on the degrees that the dev wants 
  });
  
  target.addEventListener ('mouseleave', () => {
    transitioning = true;
    setTimeout(() => transitioning = false, 250); // Avoid any evident bug;

    setTimeout(() => target.style.transform  = `rotateX(0deg) rotateY(0deg)`, 50);
    //timeout for helping avoiding bad effects
  });
}



hover3DEffect(logo, 20);
