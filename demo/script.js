/* --------> import { hover3DEffect } from "../hover3DEffect";
Do that only if your script tag in HTML is type="module", 
otherwise copy and past the full function */


const logo = document.querySelector('.logo');

const hover3DEffect = (target, degrees) => {
    target.style.transition = '150ms transform ease';
    target.addEventListener('mousemove', e => {
      const targetXPosition = e.target.getBoundingClientRect().left;
      const targetYPosition = e.target.getBoundingClientRect().top;
      const coordinatesFromCenter3D = {
        y: ((e.clientX - targetXPosition) / target.clientWidth) * 2 - 1,
        x: ((e.clientY - targetYPosition) / target.clientHeight)  * 2 - 1
      }
      
      const rotateElement = () => {
        const effect = {
          x: coordinatesFromCenter3D.x * degrees,
          y: coordinatesFromCenter3D.y * degrees,
        }
        logo.style.transform  = `rotateY(${-(effect.x)}deg) rotateX(${-(effect.y)}deg)`
        //console.log(logo.style.transform);
      }
      rotateElement();
      
    });
  
    target.addEventListener ('mouseleave', () => {
      target.style.transform  = `rotateX(0deg) rotateY(0deg)`
    });
}


hover3DEffect(logo, 50);