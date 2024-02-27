import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return <div style={{ textDecoration: 'none', padding: '5px'}} />;
    // return <div className="divider" />;
    // return <input spellCheck />;
    // return <input spellCheck={false} />;
    // return <input maxLength={5} />;
}

root.render(<App />);