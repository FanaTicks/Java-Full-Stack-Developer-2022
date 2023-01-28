import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import rootReducer from "./Reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(rootReducer)

const root = document.getElementById('root');
render(
    <Provider store={store}>
        <App />,
    </Provider>,
    root,
);

