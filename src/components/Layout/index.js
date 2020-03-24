import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './index.css'
import config from '../../config/globalConfig'
import TabBar from './TabBar'
import Login from '../my/index'
import Index from '../index/index'
import Header from '../header'
export default function index() {
    return (
        <div className="page">
            <Router>
                <Header></Header>
                <TabBar>
                </TabBar>
                <Switch>
                    <Route path="/my" exact component={Login}></Route>
                    <Route path="/" exact component={Index}></Route>
                </Switch>
            </Router>
        </div>
    )
}
