import React from 'react';

const Menu = (props) => {
  const {menuItems} = props;
  return (
    <div className='section-center'>
      {
        menuItems.map((item) => {
          const {id, title, price, img, desc} = item;
          return (
            <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{price}</h4>
                </header>
                <p>{desc}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
};

export default Menu;