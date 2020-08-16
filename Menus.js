import React from 'react'
import {Menu} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {Link } from 'dva/router'

const  {SubMenu} = Menu
class Menus extends React.Component{
  render() {
    return(
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="首页">
            <Menu.Item key="/bar">
              <Link to='bar' >饼图 </Link>
            </Menu.Item>
            <Menu.Item key="/line">
              <Link to='/line' >折线图 </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Menus;
