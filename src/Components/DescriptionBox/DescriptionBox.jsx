import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buying and seeling of products or service over the internet showcase their products, interact with curstomers, and cnductor transactions without the need for a physical presnce. E-commerce website have gained immense popularity due their convenical accessiblity, and the global reach they offer.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;
