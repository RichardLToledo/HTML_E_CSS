import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Card from './components/Card/Card.js';
import Scheduled from './components/Scheduled/Scheduled.js';
import Contact from './components/Contact /Contact.js';
import Map from './components/Map/Map.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}  />  
        <Route path="/anuncio" component={Card}  />
        <Route path="/agendamento" component={Scheduled}  />
        <Route path="/contato" component={Contact}  />
        <Route path="/mapa" component={Map}  />
      </Switch>
    </div>
  );
}

export default App;
