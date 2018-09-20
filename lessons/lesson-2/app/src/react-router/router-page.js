import React from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Topics = (props) => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.history.push('/');
        }}>
        GO TO HOME PAGE
      </button>
    </div>
  );
};

export const RouterPage = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about2222222">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/about2222222" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
);

const HomeWithROuter = withRouter(Home);