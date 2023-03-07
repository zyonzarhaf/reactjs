import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  
  const [menuItems, setMenuItems] = useState(items);
  

  const itemFilter = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories allCategories={allCategories} itemFilter={itemFilter}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
};

export default App;