import React from 'react';
import './styles.css';
import CartW from './Cartw';
import {Link} from "react-router-dom"



const Nav = () => {
    return (
        <ul className ="navContainer">
            {<img className="imgNAV" src="/configuracion.png" alt="pp" />}
            <li><Link to = {"/"} className="list">Home</Link></li>
            <li><Link to={`/category/Accesorios`} className="list">Accesorios</Link></li>
            <li><Link to={`/category/Notebook`} className="list">Computadoras</Link></li>
            <li><Link to={`/category/Consolas`} className="list">Consolas</Link></li>
            <CartW/>
        </ul>
    )
}

export default Nav
