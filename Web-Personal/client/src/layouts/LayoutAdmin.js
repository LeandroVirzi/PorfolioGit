import React from 'react';
import { Route, Switch } from "react-router-dom";
import {Layout} from "antd";//libreria de diseño.

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;
    
    
    return (
        <Layout>
            <h2>Menu sider Admin</h2>
            <Layout>
                <Header>Header....</Header>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Leandro Virzi</Footer>
            </Layout>
        </Layout>
    );
} 

function LoadRoutes({ routes }) {
    return(
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}

