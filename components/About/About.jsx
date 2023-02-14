import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


export const About = () => {
  const videoRef = useRef(null);


  useEffect(() => {
    const video = videoRef.current;

    gsap.to(video, {
      scrollTrigger: {
        trigger: video,
        start: 'top center',
        end: 'bottom center',
        scrub: false,
      },
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="about section" id="onas">
      <SectionTitle title="O nas" subtitle="Kim jesteśmy?"/>
      <div className="about__content">


        <video className="about__video" width="50%" height="auto" ref={videoRef} autoPlay loop
               controls
               muted>
          <source src="/sup-party.mp4" type="video/mp4"/>

          Your browser does not support the video tag.
        </video>

        <div className="container">
          <div className="about__text">
            <p>
              Jesteśmy firmą, która dostarcza wysokiej jakości sprzęt do wodnych sportów, w tym
              deski
              SUP. Nasza oferta skierowana jest do osób, które chcą spróbować swoich sił w tej
              dyscyplinie lub do weteranów, którzy szukają nowych wyzwań.
            </p>
            <p>Nasze deski są doskonale wyważone i łatwe w użyciu, co pozwala na szybkie i
              bezproblemowe rozpoczęcie przygody z SUP. Wszystkie nasze deski są regularnie
              serwisowane i sprawdzane, aby zapewnić najlepszą jakość i bezpieczeństwo.
            </p>
            <p>Posiadamy szeroką gamę desek, w tym modele dla początkujących i zaawansowanych, a
              także
              deski typu race i surf. Nasz zespół składa się z entuzjastów wodnych sportów, którzy
              chętnie pomogą w doborze odpowiedniej deski i doradzą, jak najlepiej ją wykorzystać.
            </p>
            <p>Zapraszamy do odwiedzenia naszej siedziby i wypożyczenia deski SUP. Będzie nam
              niezmiernie miło gościć Państwa i umożliwić doświadczenie niezapomnianych wrażeń na
              wodzie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};
