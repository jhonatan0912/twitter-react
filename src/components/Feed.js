import React from 'react';
import user from './../user.png';
const NavMain = () => {
  return (
    <div className='main__menu__feed'>
      <img className='user__img' src={user} alt="user" />
      <span className='user__name'>Hola @ja1bertsr!</span>
      <button className='main__buttons'>Tweet!</button>
      <button className='main__buttons'>Salir</button>
    </div>
  );
}

export default NavMain