import React from 'react';
import './styles.css';
import CartW from './Cartw';



const Nav = () => {
    return (
        <ul className ="navContainer">
            {<img className="imgNAV" src="/configuracion.png" alt="pp" />}
            <li className="list">Home</li>
            <li className="list">Categoria 1</li>
            <li className="list">Categoria B</li>
            <CartW/>
        </ul>
    )
}

export default Nav
