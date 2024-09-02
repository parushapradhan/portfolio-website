'use client'
import React, { useState } from 'react';
import "./Menu.css"
import MenuToggle from '../MenuToggle/MenuToggle';



const MenuIcon: React.FC<{ className?: string; path?: string}> = ({ className, path }) => {
  return (
    <a href={path} aria-label="Toggle Menu">
      <img className={className}  src='/Cat.png' alt="Menu Icon" />
    </a>
  );
};



const Menu: React.FC = () => {
  return <>
      <nav className='fixed top-0'>
        <div className="flex">
          <MenuIcon className='h-12 w-12 ml-2' path="/"/>
          {/* <MenuToggle/> */}

        </div>
      </nav>
  </>
};

export default Menu;
