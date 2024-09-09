import React from 'react';
import ReactDOM from 'react-dom/client';
import { F2lTrainer } from './components/App';

const App: React.FC = () => {
  return <F2lTrainer />;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);