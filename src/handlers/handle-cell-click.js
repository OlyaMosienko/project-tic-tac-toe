import { STATUS, PLAYER } from '../constants';
import { checkWin, checkEmptyCell } from '../utils';
import { setCurrentPlayer, setField, setStatus } from '../actions';

export function handleCellClick(state, cellIndex, dispatch) {
	const { status, field, currentPlayer } = state;
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	)
		return;

	const newField = [...field];

	newField[cellIndex] = currentPlayer;

	dispatch(setField(newField));

	if (checkWin(newField, currentPlayer)) {
		dispatch(setStatus(STATUS.WIN));
	} else if (checkEmptyCell(newField)) {
		dispatch(
			setCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			),
		);
	} else {
		dispatch(setStatus(STATUS.DRAW));
	}
}
