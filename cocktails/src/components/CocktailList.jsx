import { useAppContext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
    const { loading, cocktails } = useAppContext();

    if (loading) {
        return (
            <Loading/>
        )
    }

    else if (cocktails.length < 1) {
        return (
           <h2 className='section-title'>
            no cocktails matched your search
           </h2>
        )
    }

    else {
        return (
            <section className='section'>
                <h2 className='section-title'></h2>
                <div className='cocktails-center'>
                    {cocktails.map((item) => {
                        return (
                            <Cocktail key={item.id} {...item}/>
                        )
                    })}
                </div>
            </section>
        )
    }
};

export default CocktailList;