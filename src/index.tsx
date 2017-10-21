import * as React from 'React';
import * as ReactDOM from "react-dom";
import { App } from './containers/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { History } from 'history';
import './index.css';

let token = 'YUVFXUChB6MQNM9OehyPY7Rpb4Q';

ReactDOM.render(
  <Router>
      <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);
