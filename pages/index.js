import { Hero } from '../components/Hero/Hero.jsx';
import { About } from '../components/About/About.jsx';
import { Training } from '../components/Training/Training.jsx';
import {Expeditions} from "../components/Expeditions/Expeditions";
import {Camp} from "../components/Camp/Camp";
import {Footer} from "../components/Footer/Footer";

const IndexPage = () => (
    <>
      <Hero/>
      <About/>
      <Training/>
      <Expeditions/>
      <Camp/>
      <Footer/>
    </>
  )

export default IndexPage