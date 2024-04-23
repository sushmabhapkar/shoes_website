import React from 'react';
import ShoesImages from "./shoesm.png";
import './Header.css';
import HeaderButtonCart from './HeaderButtonCart';

export default function Header() {
  return (
    <div>
      <header className='header'>
        <h1>👟👟.....Shoes Websites....👟👟</h1>
        <HeaderButtonCart/>
      </header>
      <div className='main-image'>
        <img src={ShoesImages} alt='shoes' className='img' />
      </div>
    </div>
  );
}
