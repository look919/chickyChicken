import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetMenu} from './actions/menu'
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.subscribe(()=> {
  console.log(store.getState())
})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


 //const RenderApp = ReactDOM.render(jsx, document.getElementById('app'));

store.dispatch(startSetMenu()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'))
})

