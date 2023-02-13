import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';

export const About = () => (
  <div className="about" id="onas">
    <div className="container">
      <SectionTitle title="O nas" subtitle="Kim jesteśmy?"/>
      <div className="about__content">
        <div>
          <video width="50%" height="auto" autoPlays>
            <source src="./sup-party.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <p>
            Jesteśmy firmą, która dostarcza wysokiej jakości sprzęt do wodnych sportów, w tym deski
            SUP. Nasza oferta skierowana jest do osób, które chcą spróbować swoich sił w tej
            dyscyplinie lub do weteranów, którzy szukają nowych wyzwań.
          </p>
          <p>Nasze deski są doskonale wyważone i łatwe w użyciu, co pozwala na szybkie i
            bezproblemowe rozpoczęcie przygody z SUP. Wszystkie nasze deski są regularnie
            serwisowane i sprawdzane, aby zapewnić najlepszą jakość i bezpieczeństwo.
          </p>
          <p>Posiadamy szeroką gamę desek, w tym modele dla początkujących i zaawansowanych, a także
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
