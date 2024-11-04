import Image from 'next/image';
import Loga from './images/logo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <a className="logo" href="index.html">
                    <Image src={Loga} alt="Silicon Logotype" width={100} height={100} />
                </a>
                <nav className="navbar">
                    <a className="navlink" href="#">Features</a>
                </nav>
                <span className="label">Darkmode</span>
                <div className="btn-toggle-switch">
                    <label htmlFor="darkmode-switch" className="toggle-switch">
                        <input className="darkmode-switch" type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <a id="auth-signin" href="#" className="btn-primary">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign in / up</span>
                    </a>
                </div>
                <button className="btn-mobile">
                
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
}
