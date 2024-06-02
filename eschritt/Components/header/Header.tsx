import React from 'react'
import Navbar from '../navbar/Navbar'
import style from './header.module.css'

const Header = () => {
  return (
    <div>
        <header className={style.header}>
        <Navbar/>
        <div className={style.auth}>
            <button className={style.auth_btn}>Login</button>
            <button className={style.auth_btn}>Sign up</button>

        </div>

        </header>
        </div>
  )
}

export default Header