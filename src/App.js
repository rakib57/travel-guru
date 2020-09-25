import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './componets/Header/Header.js';
import Destination from './componets/Destination/Destination.js';
import DestinationInfo from './componets/DestinationInfo/DestinationInfo.js';
import DestinationDetails from './componets/DestinationDetails/DestinationDetails.js';
import Login from './componets/Login/Login.js';
import DestinationPlace from './componets/DestinationPlace/DestinationPlace.js';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute.js';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/destination">
                <Destination></Destination>
              </Route>
              <Route path="/destinationInfo">
                  <DestinationInfo></DestinationInfo>
              </Route>
              <Route path="/destinationDetails/:destinationId">
                  <DestinationDetails></DestinationDetails>
              </Route>
              <PrivateRoute path="/destinationPlace/:destinationId">
                <DestinationPlace></DestinationPlace>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/">
                <Destination></Destination>
              </Route>
            </Switch>
          </Router>
      </UserContext.Provider>
  );
}

export default App;