import React from 'react';
import Counter from '../../components/Counter';
import { Tag } from 'antd';

const Example = () => (
  <div>
    <h1 className="page-header">Example (Application State)</h1>
    <div className="page-contents">
      <div style={{marginBottom: '20px'}}>
        This example demonstrates how the application manages state changes.
        Follow the code from <Tag>src/views/Example/Example.js</Tag>to see whats happening !
        </div>
      <div>
        <Counter />
      </div>
    </div>
  </div>
);

export default Example;
