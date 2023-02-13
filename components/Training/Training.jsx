import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { Card } from '../Card/Card.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

export const Training = () => {

  gsap.registerPlugin(ScrollTrigger);
  return (
    <div id="szkolenia" className="section">
      <div className="container">
        <SectionTitle title="Szkolenia" subtitle="Zobacz czego się nauczysz"/>
        <div className="training-cards">
          <Card background="#12A431" title="Podstawy" image="1.jpg">
            <p>Pływanie na desce SUP (Stand Up Paddleboarding) wymaga równowagi i dobrej
              koordynacji. Warto ćwiczyć na sucho, aby później płynnie przenieść umiejętności na
              wodę.</p>
            <p>Podstawowym elementem jest utrzymywanie równowagi na desce poprzez rozłożenie ciężaru
              ciała na obu stopach i odpowiednie ustawienie rąk.</p>
            <p>Aby płynąć skutecznie, należy używać specjalnego wiosła SUP, które pozwala na
              kontrolowanie kierunku i prędkości pływania. Wiosłowanie powinno być płynne i
              rytmiczne.</p>
          </Card>
          <Card background="#E7AF24" title="Doskonalenie" desc="" image="2.jpg" reverse/>
          <Card background="#E724BD" title="Ratownictwo" desc="" image="3.jpg"/>
          <Card title="Free style" desc="" image="4.jpg" reverse/>
        </div>
      </div>
    </div>
  );
};
