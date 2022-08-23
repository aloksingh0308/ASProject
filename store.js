import { createStore } from 'redux';
import appReducer from './src/redux/reducer';

const store = createStore(appReducer);


export default store;