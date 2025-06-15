import React from 'react';

// import User from './User';
import UserClass from './UserClass.js';

class About extends React.Component {
    constructor(props) {
        console.log('constructor About');
        super(props);
    }
    componentDidMount() {
        console.log('componentDidMount About');
    }
    render() {
        console.log('render About');
        return (
            <>
                <h1>About Namaste React</h1>
                {/* <User name={'Sagar (function)'} location={'Pune'} contact={'kaka8shagy@gmail.com'} /> */}
                <UserClass name={'First'} location={'Pune'} contact={'kaka8shagy@gmail.com'} />
                <UserClass name={'Second'} location={'Pune'} contact={'kaka8shagy@gmail.com'} />
            </>
        );
    }
    
}

export default About;