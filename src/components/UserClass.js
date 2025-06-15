import React from 'react';

import fetchWithCache from '../utils/fetchWithCache';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dummy',
            location: 'Default',
            avatar_url: '',
        };
    }
    componentDidMount() {
        console.log('UserClass component mounted');
        setTimeout(async () => {
            const userData = await fetchWithCache('https://api.github.com/users/kaka8shagy');
        
            this.setState({
                name: userData.name,
                location: userData.location,
                imgUrl: userData.avatar_url || '',
            });
        }, 2000);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('UserClass component updated');
    }
    componentWillUnmount() {
        console.log('UserClass component will unmount');
    }
    render() {
        const {
            name, location, imgUrl
        } = this.state;
        return (
            <div className="user-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <img className="avatar-image" src={imgUrl} />
                    </div>
                    <div>
                        <h1>Name: {name}</h1>
                        <h2>Location: {location}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserClass;