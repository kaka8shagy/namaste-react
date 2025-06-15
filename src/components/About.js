import React from 'react';

// import User from './User';
import UserClass from './UserClass.js';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>About Namaste React</h1>
                <UserClass />
            </>
        );
    }
    
}

export default About;