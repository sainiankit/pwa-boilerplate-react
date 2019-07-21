import React from 'react';
import Todo from '../../components/Todo';
import { Tag } from 'antd';

const Async = () => (
  <div>
    <h1 className="page-header">Async Redux-Logic Example</h1>
    <div className="page-contents">
      <div style={{ marginBottom: '20px' }}>
        This example demonstrates how the application manages state changes, when an async action is involved.
        Follow the code from <Tag>src/views/Async/Async.js</Tag>to see whats happening !
        </div>
      <Todo />
    </div>
  </div>
);

export default Async;
