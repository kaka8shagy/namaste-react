import React from 'react';
import ReactDOM from 'react-dom/client';


// const heading = React.createElement('h1', {}, 'Namaste React')
const heading = <h1 id="heading">Namaster React</h1>
const Heading = () => (
    <div>
        <h1 id="heading">Namaster React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />)
