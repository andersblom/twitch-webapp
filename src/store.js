import { createStore } from 'redux';

import rootRecuer from './reducers';

const store = createStore(
    rootRecuer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;