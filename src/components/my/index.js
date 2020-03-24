import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
export default function My() {
    return (
        <div className="myPage">
            <div className="photo"></div>
            <LoginState></LoginState>
        </div>
    )
}

function LoginState() {
    const State = localStorage.getItem('userinfo');
    if (State) {
        return (
            <div>

            </div>
        )
    }
    return (
        <div>
            <LoginButton></LoginButton>
        </div>
    );
}
function LoginButton() {
    const [num, setNum] = useState(0);
    useEffect(() => {
        axios({
            url: "https://api.linpc.cn/api/getCurrenPerson",
            data: {
                date: '2020-03-09'
            },
            method: 'post'
        }).then(res => {
            console.log(res)
        })
    }, [num])
    return (
        <div>
            <button onClick={() => { setNum(num + 1) }}>立即登录</button>
        </div>
    );
}