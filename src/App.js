import Footer from "./Footer";
import Header from "./Header";
import Contacto from "./Contacto"
import Equipo from "./Equipo"
import Servicio from "./Servicio"
import Catalogo from "./Catalogo"
import Inicio from "./Inicio"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Inicio/>
          </Route>
          <Route path='/contactos'>
            <Contacto/>
          </Route>
          <Route path='/catalogo'>
            <Catalogo/>
          </Route>
          <Route path='/servicios'>
            <Servicio/>
          </Route>
          <Route path='/equipo'>
            <Equipo/>
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
 
}
