import menu from '../../config/menu.js';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image.js';

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
      // .to('.header__link', {
      //   opacity: 1,
      //   y: 0,
      //   stagger: { amount: .5 }
      // }, '-=0.8');

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
          <div className="header__icon"><FiMail/>support@lepszastronawody.pl</div>
          <div className="header__icon"><FiPhone/>+48 123 456 789</div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-wrapper">
            <Link href={'/'}>
              <div className="header__logo">
                <Image src={logo} height={60} alt="logo"/>
              </div>
            </Link>
            <ul className="header__nav">
              {menu.map(item => (
                <li key={item.name} className="header__link">
                  <Link href={item.path} scroll={false}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Button label="Kontakt" color="green"/>
              </li>
            </ul>
            <div className="header__burger" onClick={handleMenu}>
              <div className="line line-top"/>
              <div className="line line-mid"/>
              <div className="line line-bot"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
