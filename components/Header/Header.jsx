import menu from '../../config/menu.js';
import Link from 'next/link';
import logo from '../../public/logo.png';
import Image from 'next/image.js';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { FiMapPin, FiPhone } from 'react-icons/fi';

export const Header = () => {
  const headerRef = useRef(null);
  const tl = useRef(gsap.timeline({
    paused: true,
    reversed: true
  })).current;

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.to('.line-top', { y: 10, })
        .to('.line-bot', { y: -10 }, '-=0.5')
        .to('.line-top', { rotation: 45 })
        .to('.line-mid', { rotation: 45 }, '-=0.5')
        .to('.line-bot', { rotation: 135 }, '-=0.5')
        .to('.header__nav',
          {
            y: 0,
            duration: 1
          },
          '-=1')
        .to('.header__link', {
          opacity: 1,
          y: 0,
          stagger: { amount: .5 }
        }, '-=0.8');

    }, headerRef);

    return () => ctx.revert();
  }, []);

  function handleMenu() {
    tl.reversed() ? tl.play() : tl.reverse();
  }

  return (
    <div className="header" ref={headerRef}>
      <div className="header__top container">
        <div className="header__icon"><FiMapPin/>Agnieszki 2, 40-110 Katowice</div>
        <div className="header__icon"><FiPhone/>+48 123 456 789</div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-wrapper">
            <Link href={'/'}>
              <div className="header__logo">
                <Image src={logo} height={60}/>
              </div>
            </Link>
            <ul className="header__nav">
              {menu.map(item => (
                <li key={item.name} className={item.name}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
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
