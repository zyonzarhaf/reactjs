import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setIsLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);
    
    const fetchSingleCocktail = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = drinks[0];

                const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
                
                const newDrinks = {name, image, info, category, glass, instructions, ingredients}
                setCocktail(newDrinks);
            }

            else {
                setCocktail(null);
            }
            setIsLoading(false);
        }

        catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSingleCocktail()
    }, [id]);

    if (loading) {
        return (
            <Loading/>
        )
    }

    else if (!cocktail) {
        return (
            <h2 className='section-title'>no cocktail to display</h2>
        )
    }

    else if (cocktail) {
        const {name, image, info, category, glass, instructions, ingredients} = cocktail;
        return (
            <section className='section cocktail-section'>
            <Link to='/' className='btn btn-primary'>back home</Link>
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
                <img src={image} alt={name}/>
                <div className='drink-info'>
                    <p><span className='drink-data'>name:</span>{name}</p>
                    <p><span className='drink-data'>category:</span>{category}</p>
                    <p><span className='drink-data'>info:</span>{info}</p>
                    <p><span className='drink-data'>glass:</span>{glass}</p>
                    <p><span className='drink-data'>instructions:</span>{instructions}</p>
                    <p><span className='drink-data'>ingredients:</span>{ingredients.map((ingredient, index) => {
                       if (ingredient) {
                        return <span key={index}>{ingredient}</span>
                       }

                       else {
                        return null
                       }
                    })}</p>
                </div>
            </div>
        </section>
        )
    }

};

export default SingleCocktail;