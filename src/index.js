import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

import './index.css';
import { Provider } from 'mobx-react';
import ItemStore from './store/ItemStore';

const itemList = new ItemStore();
// create instance of our global store

ReactDOM.render(
    <Provider itemList={itemList}>
        <Application />
    </Provider>,
    document.getElementById('root')
);
