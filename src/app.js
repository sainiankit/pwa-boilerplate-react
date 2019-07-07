/* app.js
Exports the frontend application as App React Component,
Initialises Application Route using react-router and React components from /views.
Initialises Redux store and provides it to the App.
Loads the App Component into #root. */

import { hot } from 'react-hot-loader/root'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './views/routes';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar/Sidebar';

// CSS File Imports
import './main.scss';

const { Content } = Layout;

const App = () => (
  <Router>
    <div className="app-container">
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ overflow: 'initial' }}>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </div>
  </Router>
);

export default hot(App)
