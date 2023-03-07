import React from 'react';

const List = (props) => {
  console.log(props);
  const {people, removePerson} = props;
  console.log(props);
  
  return ( 
    <>
      {people.map((person) => {
        const { id, name, age, image} = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='deets'>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button className='remove-btn' onClick={() => removePerson(id)}>Remove</button>
          </article>
        );
      })}
    </>
  );
};

export default List;