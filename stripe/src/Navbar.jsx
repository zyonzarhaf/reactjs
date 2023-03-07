import {useAppContext} from './context';
import {FaBars} from 'react-icons/fa';
import logo from './images/logo.svg';

const Navbar = () => {
    const {sidebarToggle, displaySubmenu, closeSubmenu} = useAppContext();

    return (
        <nav className='nav' onMouseOver={closeSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='stripe' className='nav-logo'/>
                    <button className='btn toggle-btn' onClick={sidebarToggle}><FaBars/></button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>
                    sign in
                </button>
            </div>
        </nav>
    )
};

export default Navbar;