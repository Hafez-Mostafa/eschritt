"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { PiWebhooksLogoFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import style from './navbar.module.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className={style.navbar}>
                <div>
                    <Link className={style.navLogo} href="/">
                        MOSMO<PiWebhooksLogoFill /> YAS
                    </Link>
                </div>
                <div className={style.menu} onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <IoMdClose /> : <AiOutlineMenu />}
                </div>
                <div className={`${style.navLinksWrapper} ${toggle ? style.open : ''}`}>
                    <div className={style.navLinks}>
                        <Link onClick={()=>setToggle(false)}  className={style.navLink} href="/admin">Admin</Link>
                        <Link  onClick={()=>setToggle(false)}className={style.navLink} href="/articles">Articles</Link>
                        <Link onClick={()=>setToggle(false)} className={style.navLink} href="/about">About Me</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
