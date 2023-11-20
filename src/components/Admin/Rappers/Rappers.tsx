import React, {useState} from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import vieon from '../../../assets/img/vieon_1.png';
import { Link, Route, Routes } from 'react-router-dom';
import Admin_Header from '../Header/Admin_Header';
import InputSearch from '../Management/Input/InputSearch';
import TableUser from '../Management/Table/TableUser';
import TableRapper from '../Management/Table/TableRapper';

const { Header, Content, Footer, Sider } = Layout;

function Rappers() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  return (
    <div className='absolute bottom-0 left-0 right-0 z-0 h-screen w-full'>
      <Layout className='h-full'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className='flex justify-center'>
        <a href="">
          <img src={vieon} height={120} width={140} alt="" />
        </a>
        </div>
        <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">         
          <Link to="/admin/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/rappers">Rappers</Link>
        </Menu.Item>
      </Menu>
      </Sider>
      <Layout>
         <Admin_Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <InputSearch/>
                <TableRapper/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </div>
  )
}

export default Rappers