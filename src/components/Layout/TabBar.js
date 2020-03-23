import React from 'react'
import config from '../../config/globalConfig'
import './index'
import { withRouter } from 'react-router-dom'
function TabBar(props) {
    console.log(props)
    if (config.tabBarPower) {
        return (
            <div className="tabbar">
                    111
            </div>
        )
    } else {
        return null
    }
}
export default withRouter(TabBar)