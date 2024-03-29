import {useEffect, useRef} from 'react';
import {gsap} from 'gsap/dist/gsap';

export const Hero = () => {

  const heroRef = useRef(null);
  const tl = useRef(gsap.timeline()).current;

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.fromTo('.hero', {opacity: 0}, {opacity: 1});
      tl.fromTo('.title div', {y: '-100%'}, {y: 0});
      tl.fromTo('.subtitle div', {y: '-100%'}, {y: 0});
      tl.fromTo('.desc div', {y: '-100%'}, {y: 0});
      tl.fromTo('.button div', {y: '-100%'}, {y: 0});

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      <div className="hero">
        <div className="container">
          <div/>
          <div className="slogan">
            <div className="title">
              <div>Lepsza strona wody</div>
            </div>
            <div className="subtitle">
              <div> Sup port jako miejsce dla wszystkich desek, które chcą z nami wypłynąć na
                mniejsze
                i większe wyprawy
              </div>
            </div>
          </div>
          <div className="board">
              <img src="sup.svg" alt="board"/>
          </div>
        </div>
      </div>
    </div>
  );
};
