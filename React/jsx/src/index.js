import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    const inputType = 'number';
    const minValue = 5;
    return <input type={inputType} min={minValue} />;
}

root.render(<App />);