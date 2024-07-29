import { useState } from 'react';
import { handleCellClick, handleRestart } from './handlers';
import { STATUS, PLAYER } from './constants';
import { createEmptyField } from './utils';
import { AppLayout } from './AppLayout';

export const App = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(createEmptyField());

	const state = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	};

	return (
		<AppLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};
