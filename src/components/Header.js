import { Link } from 'react-router';

import { useContext } from 'react';

import useOnlineStatus from '../utils/useOnlineStatus';

import { LOGO_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

export const Header = () => {
    const isOnline = useOnlineStatus();
    const onlineStatus = isOnline ? '🟢' : '🔴';
    const userData = useContext(UserContext);
    console.log(userData)
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
                    <li className="ml-3">{userData.loggedInUser}</li>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <li className="ml-3">{loggedInUser}</li>}
                    </UserContext.Consumer>
                    {/* userData */}
                </ul>
            </div>
        </div>
    )
}

export default Header;
