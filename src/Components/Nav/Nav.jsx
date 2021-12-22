import React from 'react';
import './styles.css';
import CartW from './Cartw';
import {Link} from "react-router-dom"



const Nav = () => {
    return (
        <ul className ="navContainer">
            {<img className="imgNAV" src="/configuracion.png" alt="pp" />}
            <Link to = {"/"} className="list">Home</Link>
            <Link to={`/category/Accesorios`} className="list">Accesorios</Link>
            <Link to={`/category/Notebook`} className="list">Computadoras</Link>
            <Link to={`/category/Consolas`} className="list">Consolas</Link>
            <CartW/>
        </ul>
    )
}

export default Nav
