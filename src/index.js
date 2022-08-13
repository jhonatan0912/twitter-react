import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import NavMain from './components/Feed';
import FeedBox from './components/FeedBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className='main'>
    <Header />
    <div className='feed'>
      <NavMain />
      <FeedBox />
      <FeedBox />
      <FeedBox />
    </div>
  </main>
);