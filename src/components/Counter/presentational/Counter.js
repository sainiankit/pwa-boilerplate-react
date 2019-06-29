import React from 'react';
import { Button } from 'antd';


const Counter = (props) => {
        return (<div>
                <Button 
                        type="primary"
                        onClick={props.onClick}
                >
                        Increase ({props.count})
                </Button>
        </div>);
}

export default Counter;