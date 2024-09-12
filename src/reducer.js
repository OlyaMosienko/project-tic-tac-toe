import { PLAYER, STATUS } from './constants';
import { createEmptyField } from './utils';

const initialState = {
	field: createEmptyField(),
	currentPlayer: PLAYER.CROSS,
	status: STATUS.TURN,
};

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'SET_FIELD':
			return { ...state, field: payload };
		case 'SET_STATUS':
			return { ...state, status: payload };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
