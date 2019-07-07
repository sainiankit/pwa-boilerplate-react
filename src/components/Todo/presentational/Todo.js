import React from 'react';
import { Button } from 'antd';
import { Collapse, Icon } from 'antd';
const { Panel } = Collapse;

/**
 * TODO:
 * Change this text
 */
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
};


const Todo = (props) => {
        return (<div>
                <Button
                        type="primary"
                        onClick={props.getTodoList}
                >
                        Get List
                </Button>
                <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                        {props.todoList.map(item => {
                                return <Panel header={item.title} key={item.id} style={customPanelStyle}>
                                        <p>{text}</p>
                                </Panel>
                        })}
                </Collapse>
        </div>);
}

export default Todo;