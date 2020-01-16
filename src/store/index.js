import { createStore } from 'redux';
import rootRouter from './reducers/rootReducer';

const store = createStore(rootRouter);

export default store;