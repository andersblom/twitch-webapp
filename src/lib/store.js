import { createStore } from 'redux';

import rootRecuer from '../reducers';

const store = createStore(
    rootRecuer,
    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ''
);

export default store;