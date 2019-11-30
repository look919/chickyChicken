import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import menu from '../reducers/menu'
import order from '../reducers/order'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      menu: menu,
      order: order
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
