import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import LobbyList from './components/LobbyList';
import Login from './components/Login';
import Register from './components/Register';
import AddLobby from './components/AddLobby';
import Bets from './components/Bets';
import Logout from './components/Logout';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/lobby" component={LobbyList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/addlobby" component={AddLobby} />
        <Route path="/bets" component={Bets} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
