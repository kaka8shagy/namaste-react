import { useEffect } from 'react';

const Footer = () => {
    console.log('render Footer');
    useEffect(() => {
        console.log('componentDidMount Footer');
    }, []);
    return (
        <div>Footer goes here</div>
    )
}

export default Footer;