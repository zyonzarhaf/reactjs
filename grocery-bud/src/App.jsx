import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list) //converts json str to object
  } else {
    return []
  }
};
 
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: true, msg: '', type: ''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // alert
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // deal w edit
      setList(list.map((item) => {
        if (item.id === editID) {
          return {...item, title: name}
        }
        return item
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'successfully edited');
      
    } else {
      // show alert
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'success', 'item added to the list')
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg});
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const deleteSingleItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditID(id);
    const specifiedItem = list.find((item) => item.id == id);
    setName(specifiedItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list)) //stringify the list and its objects
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => {setName(e.target.value)}}/>
          <button type='submit' className='submit-btn'>{isEditing? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list} deleteSingleItem={deleteSingleItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  )
}

export default App
