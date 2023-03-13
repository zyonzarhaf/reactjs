import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = (props) => {
    const { children } = props;
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newDrinks = drinks.map((item) => {
                    const {idDrink, strDrinks, strDrinkThumb, strAlcoholic, strGlass} = item;
                     
                    return {id: idDrink, name: strDrinks, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                })
                setCocktails(newDrinks)
            }

            else {
                setCocktails([])
            }
            setLoading(false);
        }

        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks]);
    
    return (
        <AppContext.Provider value={{loading, searchTerm, cocktails, setSearchTerm,}}>
            {children}
        </AppContext.Provider>
    )
};

export { useAppContext, AppProvider };