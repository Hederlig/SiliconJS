"use client";
import Image from 'next/image';
import Loga from './images/logo.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import './header.css';
import { useState, useEffect } from 'react';


export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        
        const storedThemeMode = localStorage.getItem("themeMode");

        if (storedThemeMode === "dark" || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const handleThemeToggle = () => {

        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.setItem("themeMode", "light")
            document.documentElement.classList.remove("dark")
        } else {
            setIsDarkMode(true)
            localStorage.setItem("themeMode", "dark")
            document.documentElement.classList.add("dark")
        }

    }

    return (
        <div className="header">
            <div className="container">
                <Link className="logo" href="index.html">
                    <Image src={Loga} alt="Silicon Logotype" width={47} height={44} />

                </Link>

                <nav className="navbar">
                    <h1>Silicon</h1>
                    <Link className="navlink" href="#">Features</Link>
                </nav>
                <span className="label">
                    <p>{isDarkMode ? 'Dark mode' : 'Light mode'}</p>
                </span>
                <div className="btn-toggle-switch">
                    <label htmlFor="darkmode-switch" className="toggle-switch" aria-label="darkmode switch">
                        <input id="darkmode-switch" className="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle} />
                        <span className="slider round"></span>
                    </label>
                    <Link id="auth-signin" href="#" className="btn-primary">
                        <i className="fa-regular fa-user"></i>
                        <span>Sign in / up</span>
                    </Link>
                </div>
                <button className="btn-mobile">

                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
}
