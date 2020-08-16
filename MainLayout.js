import React from "react";
import { Layout } from 'antd';
import Menus from "./Menus";
import {Route, Switch, Redirect} from "dva/router";
import Bar from "./Bar";
import Line from "./Line";
const { Header, Content, Footer, Sider } = Layout;

class  MainLayout extends React.Component{
  render() {
    return(
      <Layout>
        <Header className="header" style={{ backgroundColor:'green'}}>
          <div className="logo" />
            <div style={{textAlign: 'center'}}>这是首页</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menus />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {this.props.children}
              {/*<Switch>*/}
              {/*  <Route path="/bar" component={Bar}/>*/}
              {/*  <Route path='/line' component={Line}/>*/}
              {/*  <Redirect to='/bar'/>*/}
              {/*</Switch>*/}

            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}
export default MainLayout;
