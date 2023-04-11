import { SectionTitle } from '../SectionTitle/SectionTitle.jsx';
import { Card } from '../Card/Card.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import config from '../../config/training'

export const Training = () => {

  gsap.registerPlugin(ScrollTrigger);
  return (
    <div id="szkolenia" className="section">
      <div className="container">
        <SectionTitle title="Szkolenia" subtitle="Zobacz czego się nauczysz"/>
        <div className="training-cards">
          {config.map((el,index) => (
           <Card background={el.bg} image={`${el.image}.jpg`} title={el.title} key={el.title} reverse={index%2}>
               <div dangerouslySetInnerHTML={{__html: el.desc}}/>
           </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


