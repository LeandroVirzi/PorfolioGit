import React from 'react';
import { Button } from "antd";
import { MenuOutlined, PoweroffOutlined } from '@ant-design/icons';

import LeandroLogo from '../../../assets/img/png/logo-white.png';

import './MenuTop.scss';


export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={LeandroLogo}
                    alt="Leandro Virzi"
                />
                <Button type="link" onClick={() => console.log("Click. ")}>
                    <MenuOutlined type="menu-fold"/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Desconexion. ")}>
                    <PoweroffOutlined type="poweroff" />
                </Button>
            </div>
        </div>
    );
}



