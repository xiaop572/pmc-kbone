import React from 'react'
import config from '../../config/globalConfig'
import './index.css'
export default function Header() {
    if(config.headerPower){
        return(
            <div className="header">
                <div className="logo">
                </div>
            </div>
        )
    }
    return null;
}
