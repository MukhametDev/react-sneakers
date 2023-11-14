import React from 'react'
import './Card.scss'
const Card = ({ img, title, numberPrice }) => {
    return (
        <div className='card'>
            <div className="card__row d-flex flex-column justify-center text-center">
                <div className="card__top">
                    <img src={`${img}`} alt="" className="card__img" />
                    <p className="card__title">{title}</p>
                </div>
                <div className="card__bottom">
                    <div className="card__block d-flex flex-column align-start">
                        <p className="card__price">Цена:</p>
                        <span className="card__number">{numberPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card