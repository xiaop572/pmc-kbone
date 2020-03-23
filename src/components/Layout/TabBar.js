import React from 'react'
import config from '../../config/globalConfig'
import './index'
export default function TabBar() {
    if (config.tabBarPower) {
        return (
            <div className="tabbar">

            </div>
        )
    } else {
        return null
    }
}
