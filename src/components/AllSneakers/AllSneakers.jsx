import React, { useState } from 'react'
import Card from '../Card/Card'
import './AllSneakers.scss'


const AllSneakers = () => {
    const [data, setData] = useState([
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/01.jpg',
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            numberPrice: '12 999 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/02.jpg',
            title: 'Мужские Кроссовки Nike Air Max 270',
            numberPrice: '12 999 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/03.jpg',
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            numberPrice: '8 499 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/04.jpg',
            title: 'Кроссовки Puma X Aka Boku Future Rider',
            numberPrice: '8 999 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/05.jpg',
            title: 'Мужские Кроссовки Under Armour Curry 8',
            numberPrice: '15 199 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/06.jpg',
            title: 'Мужские Кроссовки Nike Kyrie 7',
            numberPrice: '11 299 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/07.jpg',
            title: 'Мужские Кроссовки Jordan Air Jordan 11',
            numberPrice: '10 799 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/08.jpg',
            title: 'Мужские Кроссовки Nike LeBron XVIII',
            numberPrice: '16 499 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/09.jpg',
            title: 'Мужские Кроссовки Nike Lebron XVIII Low',
            numberPrice: '13 999 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/10.jpg',
            title: 'Мужские Кроссовки Nike Blazer Mid Suede',
            numberPrice: '8 499 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/11.jpg',
            title: 'Кроссовки Puma X Aka Boku Future Rider',
            numberPrice: '8 999 руб.'
        },
        {
            id:Math.random(),
            img: '/src/assets/allsneakers/12.jpg',
            title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
            numberPrice: '11 299 руб.'
        },


    ])
    return (
        <section className="sneakers">
            <div className="sneakers__container">
                <h1 className="sneakers__title mb-40">Все кроссовки</h1>
                <div className="sneakers__row d-flex flex-wrap">
                {
                    data.map((item,idx)=>{
                        return (<Card key = {item.id} title={item.title} img={item.img} numberPrice={item.numberPrice} />)
                        
                    })
                }
                    
                </div>

            </div>
        </section>
    )
}

export default AllSneakers