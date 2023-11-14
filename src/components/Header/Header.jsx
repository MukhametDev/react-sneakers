import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className="header__container d-flex justify-between align-center">
                <div className="header__left d-flex">
                    <img width={40} height={40} src='/src/assets/header/logo.png' />
                    <div className="header__label d-flex flex-column">
                        <h3 className="header__name mb-5">REACT SNEAKERS</h3>
                        <p className="header__text">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="header__right d-flex align-center">
                    <li className="header__item d-flex align-center">
                        <img width={18} height={18} src='/src/assets/header/basket.png' />
                        <a href="" className="header__link">1205 руб.</a>
                    </li>
                    <li className="header__item d-flex align-center">
                        <img width={18} height={18} src='/src/assets/header/heart.png' />
                        <a href="" className="header__link">Закладки</a>
                    </li>
                    <li className="header__item d-flex align-center">
                        <img width={18} height={18} src='/src/assets/header/profile.jpg' />
                        <a href="" className="header__link">Профиль</a>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header