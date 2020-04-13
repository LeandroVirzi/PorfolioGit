import React from 'react';
import { Button, Icon } from "antd";
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
                    <Icon type="menu-fold"/>
                </Button>
            </div>
            <div className="menu-top__rigth">
                <Button type="link">
                    <Icon type="menu"/>
                </Button>
            </div>
        </div>
    );
}

