const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Logo" />
            </div>
            <div className="nav-container">
                <ul className="nav-items">
                    <li>Restaurants</li>
                    <li>Dishes</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;