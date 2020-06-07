import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Venta from './Components/Venta.jsx'
import OrdenesDeVenta from './Components/OrdenesDeVenta.jsx'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={OrdenesDeVenta} />
            <Route path="/ordenesVenta" component={OrdenesDeVenta}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

