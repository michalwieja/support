import {Footer} from "../components/Footer/Footer";
import Image from "next/image";
import daniel_big from "../assets/daniel_big.jpg"

const daniel = () => (
  <>
    <div className='member'>
      <div  className='member-img-wrapper'>
        <Image
          src={daniel_big}
          width={0}
          height={0}
          sizes="100vw"
          style={{width: '100%', position: 'relative'}}
          placeholder="blur"
        />
      </div>
      <div className="container member-text">
        <p>Daniel Wierzbicki- jestem absolwentem Akademii Wychowania Fizycznego w Katowicach,
          czynnym nauczycielem WF.
          Prowadzę Szkołę Pływania dla Dzieci i Niemowląt Aqualandia.
          Od dziecka uwielbiałem wodę i wszelkie aktywności z nią związane. Pływam na windsurfingu
          ( pisałem pracę magisterską na temat Historia windsurfingu w Polsce :) ), nurkuję. Posiadam
          patent sternika jachtowego i motorowodnego, jestem instruktorem żeglarstwa.
          Posiadam uprawnienia Ratownika Wodnego WOPR.
        </p>
        <p>A jako że śnieg też jest formą wody to jestem również instruktorem narciarstwa i snowboardu.
          W 2017 r zobaczyłem na You Tube film na którym ludzie pływają na stojąco na deskach i
          odpychają się długim wiosłem. Coś w mojej duszy zaśpiewało na ten widok. Znalazłem
          wypożyczalnię, popływałem i wpadłem z kretesem :)
          Chwilę później kupiłem własne supy dla siebie i dla rodziny. Od tamtej chwili supowanie jest moją
          ulubioną wodną dyscypliną sportową.
        </p>
        <p>Pływaniem na supie zaraziłem znaczną część moich znajomych.
          W supie zachwyca mnie wszechstronność tej dyscypliny- możesz leniwie doświadczać zachwytu
          nad pięknem przyrody lub zrobić sobie morderczy trening. Możesz pływać po jeziorach, rzekach,
          surfować po morskich falach lub gnać bo białej wodzie na górskich rzekach.
          Od czasu do czasu startuję z powodzeniem w zawodach sportowych lecz prawdziwą frajdę
          znajduję w wyprawach, zabawach na desce i pływaniu po górskich rzekach.
          W 2020 r wraz z Michałem postanowiliśmy wypłynąć supami na szersze wody i tak powstał
          Support lepsza strona wody- miejsce gdzie każdy znajdzie coś dla siebie.
        </p>
      </div>
    </div>

    <Footer/>

  </>
)

export default daniel