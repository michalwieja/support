import Link from "next/link";
import menu from "../../config/menu";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <footer className='footer' id={'footer'}>
    <div className="container">
      <div className="footer__content">
        <div className='footer__logo'>
          <div className="logo">
            <Link href={'/'}>
              <img src={'./logo.png'} alt="logo" />
            </Link>
          </div>
          <div className="slogan">Lepsza strona wody</div>
        </div>
        <div className='footer__menu'>
          <ul>
            {menu.map(item => (
              <li key={item.name}>
                <Link href={item.path} scroll={false}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__contact'>
          <a href="mailto:support@lepszastronawody.pl"><FiMail size={24} />support@lepszastronawody.pl</a>
          <a href="tel:601 954 322"><FiPhone size={24} />601 954 322</a>
        </div>
        <div className='footer__socials'>
          <a href="https://www.facebook.com/profile.php?id=100063516281058" target="_blank" rel="noreferrer"><FaFacebook size={40} /></a>
          <a href="https://instagram.com/support_lepsza_strona_wody?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer"><FaInstagram size={40} /></a>
        </div>
      </div>
    </div>
  </footer>
)