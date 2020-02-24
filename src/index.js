import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import { usePromiseTracker } from "react-promise-tracker";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const LoadingIndicator = props => {
//     const { promiseInProgress } = usePromiseTracker();
//        return (
//         promiseInProgress && 
//         <h1>Hey some async call in progress ! </h1>
//      );  
//     }

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
        {/* <LoadingIndicator/> */}
    </BrowserRouter>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
