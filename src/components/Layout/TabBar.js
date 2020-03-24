import React from 'react'
import config from '../../config/globalConfig'
import './index'
import { withRouter, NavLink } from 'react-router-dom'

function TabBar(props) {
    let Lis = navLi();
    if (config.tabBarPower) {
        return (
            <div className="tabbar" style={{
                background: config.tabBar.backgroundColor,
                border: `1px solid ${config.tabBar.borderStyle}`
            }}>
                {Lis}
            </div>
        )
    }
    return null
}
function navLi(props) {
    const liLength = config.tabBar.list.length;
    const liwidth = 100 / liLength;
    const Lis = config.tabBar.list.map((it, index) => {
        return <NavLink
            exact
            to={it.pagePath}
            key={index}
            style={{
                width: `${liwidth}%`,
                color: `${config.tabBar.color}`,
                backgroundImage: `url(${it.iconPath})`
            }}
            activeStyle={{
                color: `${config.tabBar.selectedColor}`,
                backgroundImage: `url(${it.selectedIconPath})`
            }}
        >
            {it.text}
        </NavLink>
    })
    return Lis;
}
export default withRouter(TabBar)