import React, {useState, createContext, useContext} from 'react';
import sublinks from './data';

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppProvider = (props) => {
    const {children} = props;
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSubmenu, setIsSubmenu] = useState(false);
    const [submenuLocation, setSubmenuLocation] = useState({});
    const [submenuContent, setSubmenuContent] = useState({page: '', links: []});

    const sidebarToggle = () => {
        setIsSidebar(!isSidebar);
    };

    const displaySubmenu = (e) => {
        const text = e.target.textContent;
        const submenuDOMrect = e.target.getBoundingClientRect();
        const center = (submenuDOMrect.left + submenuDOMrect.right) / 2;
        const bottom = submenuDOMrect.bottom - 3;
        setSubmenuLocation({center, bottom});
        setSubmenuContent((sublinks.find((item) => item.page === text)));
        setIsSubmenu(true);
    };

    const closeSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            setIsSubmenu(false);
        }
    };

/*     const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setSubMenuContent(page);
        setIsSubmenuOpen(true);
        setLocation(coordinates);

    }; some other solution i didnt like*/

    return (
        <AppContext.Provider value={{
        isSidebar, 
        isSubmenu, 
        submenuLocation, 
        submenuContent, 
        sidebarToggle, 
        displaySubmenu, 
        closeSubmenu
        }}>
            {children}
        </AppContext.Provider>
    )
};

export {useAppContext, AppProvider};