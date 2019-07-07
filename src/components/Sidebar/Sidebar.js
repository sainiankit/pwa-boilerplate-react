import React from 'react';
import { Layout, Drawer } from 'antd';
import SidebarContents from './SidebarContents';
import Trigger from './Trigger';

// CSS Imports
import './Sidebar.scss'

const { Sider } = Layout;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: null,
      isDrawerOpen: false,
      placement: 'bottom'
    }

    this.onCollapse = this.onCollapse.bind(this);
  }
  

  onCollapse(collapsed, type) {
    this.setState({
      isSidebarCollapsed: collapsed,
    });
  }

  showDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }

  render() {
    const { isSidebarCollapsed, isDrawerOpen } = this.state;
    return (
      <div className="sidebar-container">
      <Sider
        // collapsible
        style={{height: '100%'}}
        trigger={null}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={this.onCollapse}
      >
        <SidebarContents showLogo={true} />
      </Sider>
      {isSidebarCollapsed && <div><Drawer
          placement={this.state.placement}
          closable={true}
          onClose={this.onClose}
          visible={this.state.isDrawerOpen}
          height="70%"
        >
          <SidebarContents showLogo={true} />
        </Drawer>
        <Trigger onClick={this.showDrawer}/></div>}
      </div>
    );
  }
}

export default Sidebar;
