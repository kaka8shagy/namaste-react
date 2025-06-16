import { Link } from 'react-router';

import useOnlineStatus from '../utils/useOnlineStatus';

import { LOGO_URL } from '../utils/constants';

export const Header = () => {
    const isOnline = useOnlineStatus();
    const onlineStatus = isOnline ? '🟢' : '🔴';
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
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>{`Online Status: ${onlineStatus}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
