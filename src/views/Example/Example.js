import React from 'react';
import { Timeline } from 'antd';
import Counter from '../../components/Counter';

const Example = () => (
  <div>
    <h1 className="page-header">Example</h1>
    <div className="page-contents">
      <Timeline>
        <Timeline.Item>This is Example Page</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>
          <Counter />
        </Timeline.Item>
      </Timeline>
    </div>
  </div>
);

export default Example;
