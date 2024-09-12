import { createStore } from 'redux';
import { gameReducer } from './reducer';

export const store = createStore(gameReducer);

store.dispatch({ type: 'RESTART_GAME' });
