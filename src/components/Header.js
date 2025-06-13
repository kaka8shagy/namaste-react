import { LOGO_URL } from '../utils/constants';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
