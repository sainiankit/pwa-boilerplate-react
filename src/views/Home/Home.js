import React from 'react';
import { Timeline, List, Checkbox, Icon, Tag } from 'antd';


const added = [
  'React',
  'Webpack',
  'Babel',
  'HMR',
  'Bundle Analyser',
  'Responsive Layout',
  'PWA Manifest',
  'Electron Desktop Application Boilerplate',
  'Redux',
  'Redux-Logic',
  'Offline First Boilerplate',
  'API Calls Abstraction',
];

const pending = [
 
  'Jest',
  'Enzyme',
  'Sample Test Cases',
  'Reduce Redux Clutter',
  'Documentation'
];

const Home = () => (
  <div>
    <h1 className="page-header">Home</h1>
    <div className="page-contents">
      <Timeline>
        <Timeline.Item>This boiler-plate has -</Timeline.Item>
        <Timeline.Item><List
          size="small"
          header={<div>Already added to boilerplate.</div>}
          bordered
          dataSource={added}
          renderItem={item => (<List.Item>
            <Checkbox
              checked={true}
            >
              {item}</Checkbox></List.Item>)}
        /></Timeline.Item>

<Timeline.Item><List
          size="small"
          header={<div>Yet to be added to boilerplate.</div>}
          bordered
          dataSource={pending}
          renderItem={item => (<List.Item>
            <Checkbox
              checked={false}
              disabled={false}
            >
              {item}</Checkbox></List.Item>)}
        /></Timeline.Item>

      <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red"><Tag color="#87d068">Documentation</Tag></Timeline.Item>
      </Timeline>

    </div>
  </div>
);

export default Home;
