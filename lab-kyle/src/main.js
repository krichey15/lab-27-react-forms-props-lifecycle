'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import superagent from 'superagent';
import Header from './component/header';
import Footer from './component/footer';

const main = document.getElementbyId('main');

class Search extends React.Component{
  constructor(props){
    super(props);
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
      </div>
    )
  }
}

ReactDom.render(<App/>, main);
