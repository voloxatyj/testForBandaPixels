import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataProvider } from './context/DataContext'
import reducer, { initialState } from './context/reducer'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider state={initialState} reducer={reducer}>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

