import React from "react";
import { Link } from "react-router-dom";
import {Menu} from 'antd';


export default function Navbar(){
    return(
        <div>

        <Menu mode="horizontal">
        <Menu.Item key="home">
           <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="effect">
            <Link to="/effecthook">Effect</Link>
        </Menu.Item>
        <Menu.Item key="context">
            <Link to="/contexthook">Context</Link>
        </Menu.Item>
        <Menu.Item key="ref">
            <Link to="/refhook">Ref</Link>
        </Menu.Item>
        <Menu.Item key="Callback">
            <Link to="/callback">Callback</Link>
        </Menu.Item>
        <Menu.Item key="memo">
            <Link to="/memo">Memo</Link>
        </Menu.Item>
        <Menu.Item key="reducer">
            <Link to="/reducer">Reducer</Link>
        </Menu.Item>
        </Menu>
        </div>
    )
}