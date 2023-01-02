import React from "react";
import { Layout, Menu } from "antd";

const { Header, Sider } = Layout;

class Root extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <a href="/">Dashboard</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/users">Users</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/posts">Posts</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <div style={{ float: "left" }}>
              <a href="/">
                <h1 style={{ color: "#000", margin: "16px 24px 16px 0" }}>
                  My App
                </h1>
              </a>
            </div>
            <div style={{ float: "right" }}>
              <a href="/logout">
                <h1 style={{ color: "#000", margin: "16px 24px 16px 0" }}>
                  Logout
                </h1>
              </a>
            </div>
          </Header>
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default Root;
