import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducers/theme';

export default () => {
  const store = createStore(
    combineReducers({
      theme: themeReducer,
    })
  );

  return store;
};
