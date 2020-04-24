import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Card from './components/Card/Card.js';
import Scheduled from './components/Scheduled/Scheduled.js';
import Contact from './components/Contact/Contact.js';
import Mapa from './components/Map/Map.js';
import Filters from './components/Map/Filters';
import List from './components/List/List.js';
import Create from './components/CreateAnnounce/Form';
import Tips from './components/CreateAnnounce/Tips';
import Create2 from './components/CreateAnnounce/Form2';
import MapFilter from './components/Map/Map_Filters';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />      
        <Route path="/anuncio" component={Card}  />
        <Route path="/agendamento" component={Scheduled}  />
        <Route path="/contato" component={Contact}  />
        <Route path="/mapa" component={Mapa}  />
        <Route path="/imoveis" component={List}  />
        <Route path="/filters" component={Filters}  />
        <Route path="/criar-anuncio" component={Create}  />
        <Route path="/dicas-criacao" component={Tips} />
        <Route path="/criar-tipo" component={Create2} />
        <Route path="/mapa-filter" component={MapFilter} />
      </Switch>
    </div>
  );
}

export default App;
