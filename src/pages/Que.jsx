import React from 'react';


import Que from '../components/Question/pages/index';
import ScrollToTop from '../components/ScrollToTop'

const que_pages=()=> {
  return (
    <div className="App">
    <ScrollToTop />
      <Que/>
    </div>
  );
}

export default que_pages;

