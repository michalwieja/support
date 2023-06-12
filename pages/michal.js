import { Footer } from "../components/Footer/Footer";

const michal = () => (
  <>
    <div className='member'>
      <div className='member-img-wrapper'>
        <picture>
          <source media="(min-width:500px)" srcset="./michal_big.jpg" />
          <img src="./michal_small.jpg" alt="Michal" />
        </picture>
      </div>
      <div className="container member-text">
        <p>Facet po czterdziestce, lubię wszelakie wyprawy, szczególnie te dziwne typu: przejście przez bagna,
          lasem w linii prostej lub powrót do domu 30 km z buta. Lubię również szeroko rozumianą aktywność sportową.
          Cieszą mnie góry: beskidy, tatry zimowe lub ostatnio wulkan 3715 m. Bieganie i szosa pozwalają na trzymanie
          formy
          i dają sporo satysfakcji, szczególnie ukończone maratony.</p>
        <p>Supy pokazał mi Daniel, wyszkolił a potem zaprosił do projektu SUPport. Radość sprawiają mi szczególnie
          szkolenia wstępne, gdzie mogę podzielić się wiedzą podstawową i zarazić SUPem małych i dużych.</p>
        <p> Szczególnie cenię sobie różnorodność desek, które dają wiele możliwości. Od rekreacji przez zabawę, również
          wspólnotową np. na deskach wieloosobowych ale również rywalizację sportową. Ta ostatnia zaprowadziła mnie aż
          do
          półfinału MŚ ICF w Gdyni gdzie na desce pompowanej mogłem ścigać się z najlepszymi zawodnikami z całego
          świata.
          Zapraszam do wspólnego odkrywania tej formy spędzania czasu z naturą.</p>
      </div>
    </div>
    <Footer />
  </>
)

export default michal;