import {pageLinks, socialLinks} from './data';

const Navbar = () => {
    return (
    <nav className='navbar'>
        <div className='center row'>
            <div className='nav-header'>
                <img src="./" alt="Logo"/>
                <button id="nav-toggle-btn"><i className="fas fa-bars"></i></button>
            </div>
            <ul id='nav-links' className='nav-links row'>
                {pageLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <a className='nav-link' href={link.href}>{link.text}</a>
                        </li>
                    )
                })}
                <li><a className='nav-link cart' href="#cart"><i className="fas fa-shopping-bag"></i></a></li>
            </ul>
            <ul className='nav-icons row'>
                {socialLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} target='_blank' rel='noreferrer' className='nav-icon'>
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;