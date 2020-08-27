import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h2>Home</h2>
        Home...
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'JS', desc:'JS is ...'},
  {id:3, title:'React', desc:'React is ...'}
]

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: 'Sorry',
    desc: 'Not Fount'
  }
  for(var i=0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    } 
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}

function Topics() {
  var list = [];
  for(var i=0; i<contents.length; i++){
    list.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return (
    <div>
        <h2>Topics</h2>
        <ul>
          {list}
        </ul>
        <Route path="/topics/:topic_id">
          <Topic></Topic>
        </Route>


        {/* <Switch>
          <Route path="/topics/1">HTML is ...</Route>
          <Route path="/topics/2">JS is ...</Route>
          <Route path="/topics/3">React is ...</Route>
        </Switch> */}
    </div>
  )
}

function Contact() {
  return (
    <div>
        <h2>Contact</h2>
        Contact...
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>React Router DOM Example</h1>
      <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      {/* Router Path에 일치하는 모든 Component를 출력한다 (동적 Routing) */ }
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
