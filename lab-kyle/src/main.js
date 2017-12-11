'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import Header from './component/header';
import Footer from './component/footer';

const main = document.getElementById('main');

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

ReactDom.render(<App/>, main);
