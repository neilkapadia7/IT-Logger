import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <Logs />
    </Fragment>
  );
}

export default App;
