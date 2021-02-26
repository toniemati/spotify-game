import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './view/HomePage';
import Game from './view/Game';

function App() {
  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  const [creds] = useState(getHashParams());

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {Object.keys(creds).length ? (<Redirect to="/game" />) : (<HomePage/>)}
          </Route>
          <Route path="/game">
            {Object.keys(creds).length ? (<Game creds={creds}/>) : (<Redirect to="/" />)}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
