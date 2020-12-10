import React from 'react';
import './App.css';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {Route, Switch,Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import MainPage from "./pages/MainPage";
import ArtistPage from "./pages/ArtistPage";


const store = createStore(rootReducer,applyMiddleware(thunk))
const history = createBrowserHistory();

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router history={history}>
                  <Switch>
                      <Route exact={true} path='/' component={MainPage}/>
                      <Route exact={true} path='/artist' component={ArtistPage}/>
                  </Switch>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
