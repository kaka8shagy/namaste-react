import { Link } from 'react-router';

import { LOGO_URL } from '../utils/constants';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={LOGO_URL} alt="Logo" />
                </Link>
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
