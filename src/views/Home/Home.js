import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';
import readme from '../../../README.md';


const Home = () => {
  return (
    <div>
      <h1 className="page-header">Home</h1>
      <div className="page-contents">
        <div>
          <MarkdownRenderer markdown={readme} />
        </div>
      </div>
    </div>
  )
};

export default Home;
