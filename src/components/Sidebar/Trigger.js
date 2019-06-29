import React from 'react';
import { Icon } from 'antd';

import './Trigger.scss';

const Trigger = (props) => {
        const { onClick } = props;
        return (
                <div className="trigger" onClick={onClick}>
                        <Icon style={{ fontSize: '20px' }} type="bars" />
                </div>);
}

export default Trigger;