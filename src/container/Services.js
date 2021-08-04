import React from 'react';
import './Services.css';
import Rasm from '../Image/iphone 6.jpg'
import Rasm1 from '../Image/iphone 7.jpg'
import Rasm2 from '../Image/iphone 8.jpg'

function Services() {
    const products = [

        {
            id: 1,
            name: "telephone",
            img: {Rasm},
            price: 999.99

        },
        {
            id: 15,
            name: "telephone",
            img: {Rasm1} ,
            price: 999.99

        },
        {
            id: 2,
            name: "telephone",
            img: {Rasm2},
            price: 999.99

        },
        {
            id: 3,
            name: "telephone",
            img: {Rasm2},
            price: 999.99

        },
        {
            id: 4,
            name: "telephone",
            img: {Rasm2},
            price: 999.99

        },
        {
            id: 5,
            name: "telephone",
            img: {Rasm2},
            
            price: 999.99

        },
        {
            id: 6,
            name: "telephone",
            img: {Rasm2},
 
            price: 999.99

        },
        {
            id: 7,
            name: "telephone",
            img: {Rasm2},

            price: 999.99

        },
        {
            id: 8,
            name: "telephone",
            img: {Rasm2},
  
            price: 999.99

        },
        {
            id: 9,
            name: "telephone",
            img: {Rasm2},

            price: 999.99

        },
        {
            id: 10,
            name: "telephone",
            img: {Rasm2},
          
            price: 999.99

        },
        {
            id: 11,
            name: "telephone",
            img: {Rasm2},

            price: 999.99

        },
        {
            id: 12,
            name: "telephone",
            img: {Rasm2},
 
            price: 999.99

        },
        {
            id: 13,
            name: "telephone",
            img: {Rasm2},
    
            price: 999.99

        },
        {
            id: 14,
            name: "telephone",
            img: {Rasm2},
         
            price: 999.99

        }

    ]
    return (
        <div>
            <ul className='product'>
            <li className='img'>{products.map((product) => product.img)}</li>
            <li className='name'>{products.map((product) => product.name)}</li>
            <li className='btn'><button className='sell'>{products.map((product)=> product.id)} Sell now</button></li>
            </ul>
            

        </div>
    )
}

export default Services

