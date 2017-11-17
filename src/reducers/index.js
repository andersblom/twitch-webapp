import { combineReducers } from 'redux';

import { streams } from './streams';
import { games } from './games';

const rootReducer = combineReducers({ streams, games });

export default rootReducer;