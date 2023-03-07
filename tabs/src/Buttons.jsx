const Buttons = (props) => {
    const {jobs, value, setValue} = props;
    return (
        <div className='btn-container'>
        {jobs.map((job, index) => {
          const { company } = job;
          return (
            <button className={`job-btn ${index === value && 'active-btn'}`} key={index} onClick={() => {setValue(index)}}>
              {company}
            </button>
          );
        })}
        </div>
    )
}

export default Buttons;