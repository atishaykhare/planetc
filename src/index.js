import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/home/home'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/header/header";
import Watch from "./Pages/watch/watch";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/watch">
                    <Watch/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
