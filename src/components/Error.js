import { useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    console.error('Error occurred:', error);
    return (
        <div className="error-container">
            <h1>Oops!</h1>
            <h3>Something went wrong.</h3>
            <p>{error.status}: {error.statusText}</p>
        </div>
    );
}

export default Error;