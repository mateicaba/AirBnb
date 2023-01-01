import React from "react";
import { Layout } from "antd";

function Root() {
  return (
    <Layout>
      <Layout.Sider>Sider</Layout.Sider>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
}

export default Root;
