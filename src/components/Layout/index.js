import React from 'react'
import { BrowserRouter as Router, NavLink, Link, Switch } from 'react-router-dom'
import './index.css'
import config from '../../config/globalConfig'
import TabBar from './TabBar'
export default function index() {
    return (
        <div className="page">
            <Router>
                <TabBar>
                    
                </TabBar>
            </Router>
        </div>
    )
}
