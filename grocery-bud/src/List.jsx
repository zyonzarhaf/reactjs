import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = (props) => {
  const {list, deleteSingleItem, editItem} = props;
  return (
    <div className='grocery-list'>
      {
        list.map((item) => {
          const {id, title} = item;
          return (
            <article key={id} className='grocery-item'>
              <p className='title'>{title}</p>
              <div className='btn-container'>
                <button type='button' className='edit-btn' onClick={() => editItem(id)}><FaEdit/></button>
                <button type='button' className='delete-btn' onClick={() => deleteSingleItem(id)}><FaTrash/></button>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default List
