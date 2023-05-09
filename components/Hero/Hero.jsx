import {Button} from '../Button/Button.jsx';
// import Image from 'next/image.js';
// import board from 'board.png';
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
            <div className="desc">
              <div>Z nami możesz odkryć nowe horyzonty i poczuć wolność na wodzie. Nasze
                wypożyczalnie
                oferują najlepsze deski SUP na rynku, aby zapewnić Ci niezapomniane doświadczenie.
                Dołącz do nas i zacznij swoją przygodę na wodzie już dziś!
              </div>
            </div>
            <div className="button">
              <div>
                <Button label="więcej" color="yellow"/>
              </div>
            </div>
          </div>
          <div className="board">
            <div className="img">
              {/*<Image src={board} height={600}/>*/}
              {/*<img src="board.png" alt="board"/>*/}
              <iframe src='https://my.spline.design/untitled-e1d55466b55bdb7c6659c0393fbf47e5/'
                      frameBorder='0'
                      width='100%' height='100%'></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
