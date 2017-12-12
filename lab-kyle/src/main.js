'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import Header from './component/header';
import Footer from './component/footer';

const API_URL = 'http://www.reddit.com/r';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      limit: 5,
      board: '',
    }

    this.handleLimit = this.handleLimit.bind(this);
    this.handleBoard = this.handleBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      console.log('__FORM_PROPS__', this.props);
      console.log('__FORM_STATE__', this.state);
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.search(this.state.board, this.state.limit);
    }

    handleBoard(e){
      this.setState({board: e.target.value});
    }

    handleLimit(e){
      this.setState({limit: e.target.value});
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="board" placeholder="Go ahead and search" value={this.state.board} onChange={this.handleBoard}/>

          <input type="number" name="limit" min="0" max="25" placeholder="5" value={this.state.limit} onChange={this.handleLimit} />

          <button type="submit">Search</button>
        </form>
      )
    }
  }

class SearchResultList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      topics: [],
    }
    this.fetchSubReddit = this.fetchSubReddit.bind(this);
  }

  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }

  fetchSubReddit(subreddit, limit){
    superagent.get(`${API_URL}/${subreddit}.json?limit=${limit}`)
    .then(res => {
      let organized = res.body.data.children.sort((a,b) => b.data.ups - a.data.ups);
      this.setState({topics: organized});
    })
  }

  render(){
    return (
      <div>
        <Header />
        <section>
          <SearchForm search={this.fetchSubReddit} />
          <SearchResultList results={this.state.topics}/>
        </section>
        <Footer />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('main'));
