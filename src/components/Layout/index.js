import React from 'react'
import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom'
import './index.css'
import config from '../../config/globalConfig'
import TabBar from './TabBar'
import Login from '../login/index'
import Index from '../index/index'
export default function index() {
    return (
        <div className="page">
            <Router>
                <TabBar>
                </TabBar>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Index}></Route>
                </Switch>
            </Router>
        </div>
    )
}
