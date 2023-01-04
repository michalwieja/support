import menu from '../config/menu.js';
import Link from 'next/link';
import logo from '../public/logo.png';
import Image from 'next/image.js';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';

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
        .to('.mobile',
          {
            y: 0,
            duration: 1
          },
          '-=1')
        .from('.mobile-link', {
          opacity: 0,
          y: 25,
          stagger: { amount: .5 }
        }, '-=0.8');

    }, headerRef);

    return () => ctx.revert();
  }, []);

  function handleMenu() {
    tl.reversed() ? tl.play() : tl.reverse();
  }

  return (
    <div className="header absolute w-full" ref={headerRef}>
      <div className={'w-11/12 md:w-9/12 max-w-7xl m-auto flex justify-end items-center gap-2'}>
        <div className={'flex items-center gap-2'}><FiMapPin/>adres</div>
        <div className={'flex items-center gap-2'}><FiPhone/>telefon</div>
      </div>
      <div
        className={'bg-primary text-white py-4'}>
        <div className={'w-11/12 md:w-9/12 max-w-7xl m-auto flex justify-between items-center'}>
          <Link href={'/'}>
            <div className="logo relative z-20">
              <Image src={logo} height={40}/>
            </div>
          </Link>
          <ul className={'desktop hidden lg:flex gap-4'}>
            {menu.map(item => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul
            className={'mobile z-10 transform fixed w-full top-0 left-0 overflow-hidden h-screen bg-primary -translate-y-full flex items-center flex-col justify-between py-48'}>
            {menu.map(item => (
              <li key={item.name} className={'font-bold uppercase text-3xl'} onClick={handleMenu}>
                <div className={'overflow-hidden'}>
                  <div className={'mobile-link'}>
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={'hamburger lg:hidden flex flex-col gap-2 hamburger cursor-pointer z-20'}
               onClick={handleMenu}>
            <div className={'border-t w-8 line line-top'}></div>
            <div className={'border-t w-8 line line-mid'}></div>
            <div className={'border-t w-8 line line-bot'}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
