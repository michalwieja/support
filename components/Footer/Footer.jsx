import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import menu from "../../config/menu";
import {FiMail, FiPhone} from "react-icons/fi";
import {FaFacebookMessenger, FaFacebook, FaInstagram} from "react-icons/fa";

export const Footer = () => (
    <footer className='footer' id={'footer'}>
        <div className="container">
            <div className="footer__content">
                <div className='footer__logo'>
                    <div className="logo">
                        <Link href={'/'}>
                            <Image src={logo} alt="logo"/>
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
                    <div><FiMail size={24}/>support@lepszastronawody.pl</div>
                    <div><FaFacebookMessenger size={24}/>messanger</div>
                    <div><FiPhone size={24}/>123 345 456</div>
                </div>
                <div className='footer__socials'>
                    <FaFacebook size={40}/>
                    <FaInstagram size={40}/>
                </div>
            </div>
        </div>
    </footer>
)