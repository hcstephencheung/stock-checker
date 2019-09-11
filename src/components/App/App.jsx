import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import StockCheckerPage from '../../pages/StockCheckerPage/StockCheckerPage';

const App = props => {
    return (
        <Router>
            <Route component={StockCheckerPage} />
        </Router>
    );
};

export default App;
