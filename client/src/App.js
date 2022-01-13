import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { AppProvider } from "./hooks/useContext";

import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Switch>
            <Route element={<Home />} path="/"></Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
