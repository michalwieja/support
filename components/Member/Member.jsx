import { Button } from "../Button/Button";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

export const Member = ({ member, handleMore }) => {
  const { name, quote, img } = member
  const scopeRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.circle', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.circle',
          start: 'top 100%',
        },
      });
    }, scopeRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup

  }, []); // <- empty dependency Array so it doesn't re-run on every render
  return (
    <div className="about__member" ref={scopeRef}>
      <div className="circle">
        <img className='image' src={img} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="desc">{quote}</div>
      <div className="more">
        <Button onClick={handleMore} label='Więcej' color={'blue'} />
      </div>
    </div>
  )
}