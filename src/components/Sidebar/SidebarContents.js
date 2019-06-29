import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Logo from '../Logo/Logo';
import menu from '../../config/menu';

// css imports
import './SidebarContents.scss';

const SidebarContents = (props) => {
  const { showLogo } = props;
  return (
    <div className="sidebar-contents-container" >
      {showLogo && <Logo />}
      <Menu
        theme="light"
        style={{ border: 'none' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
      >
        {
          menu.map((menuItem, index) => <Menu.Item key={index}>
            <Link to={menuItem.path}>
              <Icon type={menuItem.iconType} theme="filled" />
              <span>{menuItem.menuDisplayName}</span>
            </Link>
          </Menu.Item>)
        }
      </Menu>

    </div>
  );
}

export default SidebarContents;
