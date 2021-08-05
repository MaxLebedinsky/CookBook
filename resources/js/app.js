require('./bootstrap')
import React from 'react'
import { render } from 'react-dom'
import { Routes } from './Routes'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

render(
   <Provider store={ store }>
      <PersistGate persistor={ persistor } loading={ null }>
         <Routes />
      </PersistGate>
   </Provider>,
   document.getElementById('app')
);
