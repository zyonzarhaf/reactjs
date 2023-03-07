import React from 'react';

const Categories = (props) => {
  const {allCategories, itemFilter} = props;
  return (
    <div className='btn-container'>
      {
        allCategories.map((category, index) => {
          return (
            <button className='filter-btn' key={index} onClick={() => itemFilter(category)}>{category}</button>
          )
        })
      }
    </div>
  )
};

export default Categories;
