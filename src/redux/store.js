import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducer';
/* 
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose; */

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

store.subscribe(() => {
  console.log('hola');
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

/* const asdasd <T extends Object> (T) => {
  11
} */
