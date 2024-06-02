import Link from 'next/link'
import React from 'react'
import { PiWebhooksLogoFill } from "react-icons/pi";
import style from './navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.navLogo}>
                    MOSMO <PiWebhooksLogoFill/> YAS
                </div>
                <div className={style.navLinks}>
                  
                    <Link  className={style.navLink} href={"./admin"}>  Admin</Link>
                    <Link  className={style.navLink}  href={"./articles"}> Articles</Link>
                    <Link  className={style.navLink} href={"./about"}>  About Me</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar