import React, {useState, createContext, useContext} from 'react';

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppProvider = (props) => {
    const {children} = props;

    const [isSidebar, setIsSidebar] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const toggleSidebar = () => {
        setIsSidebar(!isSidebar);
    };

    const toggleModal = () => {
        setIsModal(!isModal);
    };
    
    return (
        <AppContext.Provider value={{isModal, toggleModal, isSidebar, toggleSidebar}}>
            {children}
        </AppContext.Provider>
    )
};

export {useAppContext, AppProvider};