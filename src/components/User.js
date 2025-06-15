import { useState } from 'react';

const User = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h2>Location: {props.location}</h2>
            <h3>Contact: {props.contact}</h3>
            <button onClick={() => setCount(count+1)}>Click Count: {count}</button>
        </div>
    )
};

export default User;