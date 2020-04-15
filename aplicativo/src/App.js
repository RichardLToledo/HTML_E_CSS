import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Card from './components/Card/Card.js';
import Scheduled from './components/Scheduled/Scheduled.js';
import Contact from './components/Contact /Contact.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" component={Home}  />  
        <Route path="/anuncio" component={Card}  />
        <Route path="/agendamento" component={Scheduled}  />
        <Route path="/contato" component={Contact}  />
      </Switch>
    </div>
  );
}

export default App;
