import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function Layouts(props: any) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[props.location.pathname]}
          theme="dark">
          <Menu.Item key="/">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="/demo">
            <Link to="/demo">Demo</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Huauauaa
      </Footer>
    </Layout>
  );
}

export default Layouts;
