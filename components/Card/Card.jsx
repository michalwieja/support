import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const Card = ({
  title,
  children,
  image,
  reverse,
  background
}) => {
  const scopeRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to('.image-overlay', {
        x: '100%',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.card',
          start: 'top 80%',
        }
      });
      gsap.to('.image', {
        scale: 1.2,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.card',
          start: 'top 80%',
        }
      });
        gsap.from('.title', {
            y: 20,
            opacity:0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.card',
                start: 'top 80%',
            }
        });
        gsap.from('.desc', {
            y: 20,
            opacity:0,
            duration: 1.5,
            delay:.5,
            scrollTrigger: {
                trigger: '.card',
                start: 'top 80%',
            }
        });

    }, scopeRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={scopeRef}>
      <div className={`card ${reverse ? 'card__reverse' : ''} `} style={{ background }}>
        <div className="image-wrapper">
          <div className="image-overlay" style={{ background }}/>
          <img className="image" src={image}/>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="desc">{children}</div>
        </div>
      </div>
    </div>
  );
};
