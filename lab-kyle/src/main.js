'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import superagent from 'superagent';
import Header from '../component/header/header.js';
import Footer from '../component/footer/footer.js';

const main = document.getElementbyId('main');

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Header />
        <Search />
        <Footer />
      <div>
    )
  }
}

ReactDom.render(<App/>, main);
