import { useAppContext } from '../context';
import { useRef, useEffect } from 'react';

const SearchForm = () => {
    const {setSearchTerm} = useAppContext();
    const inputValue = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    const searchCocktail = () => {
        setSearchTerm(inputValue.current.value);
    };

    useEffect(() => {
        inputValue.current.focus()
    }, []);
    
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input type='text' ref={inputValue} onChange={searchCocktail}></input>
                </div>
            </form>
        </section>
    )
};

export default SearchForm;