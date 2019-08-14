import React from 'react';
import { Button } from 'antd';


const Counter = (props) => {
        return (<div>
                <Button
                        type="primary"
                        onClick={props.onClick}
                >
                        Increase
                </Button>
                <div style={{
                            textAlign: 'center',
                            fontSize: '100px',
                            fontWeight: '900',
                }}>
                        {props.count}
                </div>
        </div>);
}

export default Counter;