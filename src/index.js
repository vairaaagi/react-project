import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/header';
import NewsList from './components/news_list';

import JSON from './db.json';

class App extends Component {

    state = {
        news:JSON
    }
    render() {
        return (
            <div>
                <Header/>
                <h2>The news items are :</h2>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));