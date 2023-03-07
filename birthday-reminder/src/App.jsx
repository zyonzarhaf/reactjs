import React, {useState} from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson}>
        </List>
        <button className='clear-btn' onClick={() => setPeople([])}>Clear</button>
      </section>
    </main>
  )
}

export default App;
