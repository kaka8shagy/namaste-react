
const child = React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {id: 'heading-1'}, 'Heading 1 in React'),
    React.createElement('h2', {id: 'heading-2'}, 'Heading 2 in React'),
]);
const parent = React.createElement('div', { id: 'parent' }, child);
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);