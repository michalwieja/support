import menu from '../../config/menu.js';
import Link from 'next/link';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { FiPhone, FiMail } from 'react-icons/fi';
import { Button } from '../Button/Button.jsx';

export const Header = () => {
  const headerRef = useRef(null);
  const tl = useRef(gsap.timeline({
    paused: true,
    reversed: true
  })).current;

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.to('.line-top', { y: 9, })
        .to('.line-bot', { y: -9 }, '-=0.5')
        .to('.line-top', { rotation: 45 })
        .to('.line-mid', { rotation: 45 }, '-=0.5')
        .to('.line-bot', { rotation: 135 }, '-=0.5')
        .to('.header__nav',
          {
            y: 0,
            duration: 1
          },
          '-=1');
    }, headerRef);

    return () => ctx.revert();
  }, []);

  function handleMenu() {
    tl.reversed() ? tl.play() : tl.reverse();
  }

  return (
    <div className="header" ref={headerRef}>
      <div className="header__top">
        <div className="container">
          <div><a className='header__icon' href="mailto:support@lepszastronawody.pl"><FiMail />support@lepszastronawody.pl</a></div>
          <div><a className='header__icon' href="tel:601 954 322"><FiPhone />601 954 322</a></div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-wrapper">
            <Link href={'/'}>
              <div className="header__logo">
                <img src={'./logo.png'} alt="logo" />
              </div>
            </Link>
            <ul className="header__nav">
              {menu.map(item => (
                <li key={item.name} className="header__link">
                  <Link href={item.path} scroll={false}
                    onClick={() => tl.reverse()}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Link href={'#footer'} scroll={false} onClick={() => tl.reverse()}>
                  <Button label="Kontakt" color="green" />
                </Link>
              </li>
            </ul>
            <div className="header__burger" onClick={handleMenu}>
              <div className="line line-top" />
              <div className="line line-mid" />
              <div className="line line-bot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
