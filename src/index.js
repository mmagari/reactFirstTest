import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);