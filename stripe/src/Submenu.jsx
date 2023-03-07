import { useAppContext } from './context';
/* import { useState } from 'react'; */

const Submenu = () => {
    const {isSubmenu, submenuLocation, submenuContent} = useAppContext();
    /* const {columns, setColumns} = useState('col-2'); */
    /* const container = useRef(null); */

    const {center, bottom} = submenuLocation;
    const {page, links} = submenuContent;

/*     useEffect(() => {
        const {center, bottom} = location;
        const submenuStyle = container.current.style;
        submenuStyle.left = `${center}px`;
        submenuStyle.right = `${bottom}px`;
        if (links.length === 3) {
            setColumns('col-3')
        } else if (links.length > 3) {
            setColumns('col-4')
        } else {
            setColumns('col-2')
        }
    }, [location, links]); the solution I didnt like */

    return (
        <aside className={`${isSubmenu? 'submenu show' : 'submenu'}`} style={{left: `${center}px`, top: `${bottom}px`}} /* ref={container} */>
            <h4>{page}</h4>
            <div className={`submenu-center ${links.length === 3? 'col-3' : links.length > 3? 'col-4' : 'col-2'}`}>
                {links.map((item, index) => {
                    const {label, icon, url} = item;
                    return (
                        <a key={index} href={url}>{icon}{label}</a>
                    )
                })}
            </div>
        </aside>
    )
};

export default Submenu;