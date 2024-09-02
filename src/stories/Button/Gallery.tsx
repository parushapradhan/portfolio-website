import React, { useState, useEffect } from 'react';
import "./Gallery.css"
const Gallery: React.FC = () => {

  return (
    <div className='container'>
      <div className="photo-gallery">
        <div className='column'>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
        </div>
        <div className='column'>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
        </div>
        <div className='column'>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
          <div className="photo">
            <img src="/Cat.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;
