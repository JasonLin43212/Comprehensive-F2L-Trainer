import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <div>Hello, world2!</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);