import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Jobs from './Jobs';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0); //jobs[value]

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Something went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  
  return (
    <>
      {loading ? (
        <section className='section loading'>
          <h1>loading...</h1>
        </section>
      ) : (
        <section className='section'>
          <div className='title'>
            <h2>experience</h2>
            <div className='underline'></div>
          </div>
          <div className='jobs-center'>
            <Buttons jobs={jobs} value={value} setValue={setValue} />
            <Jobs jobs={jobs} value={value} />
          </div>
        </section>
      )}
    </>
  );
};

export default App;