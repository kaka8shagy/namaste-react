import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor UserClass' + this.props.name);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log('componentDidMount UserClass' + this.props.name);
    }
    render() {
        console.log('render UserClass' + this.props.name);
        return (
            <div className="user-card">
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {this.props.location}</h2>
                <h3>Contact: {this.props.contact}</h3>
                <button 
                    onClick={() => 
                        this.setState({ count: this.state.count + 1})
                    }
                >
                    Click Count: {this.state.count}
                </button>
            </div>
        )
    }
}

export default UserClass;