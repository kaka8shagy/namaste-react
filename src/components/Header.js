import { Link } from 'react-router';

import useOnlineStatus from '../utils/useOnlineStatus';

import { LOGO_URL } from '../utils/constants';

export const Header = () => {
    const isOnline = useOnlineStatus();
    const onlineStatus = isOnline ? '🟢' : '🔴';
    return (
        <div className="flex justify-between items-center shadow-lg p-2">
            <div className="logo-container">
                <Link to="/">
                    <img className="w-56" src={LOGO_URL} alt="Logo" />
                </Link>
            </div>
            <div className="nav-container">
                <ul className="flex p-4 m-4">
                    <li className="ml-3"><Link to="/">Home</Link></li>
                    <li className="ml-3"><Link to="/about">About</Link></li>
                    <li className="ml-3"><Link to="/contact">Contact</Link></li>
                    <li className="ml-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="ml-3">{`Online Status: ${onlineStatus}`}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
