import React from 'react';
import { Icon } from 'antd';
import './Logo.scss';

const Logo = (props) => (
        <div className="logo-container" >
                <div className="logo">
                <Icon
                        type="experiment"
                        theme="filled"
                        style={{
                                fontSize: "16px",
                                color: '#fff',
                                marginRight: '5px'
                        }} />
                <span className="logo-text">PWA</span>
                </div>
        </div>
)

export default Logo;