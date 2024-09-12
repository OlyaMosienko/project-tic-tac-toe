import { useState, useEffect } from 'react';
import { store } from '../../store';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './informationLayout';

export const Information = () => {
	const [informationState, setInformationState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setInformationState(store.getState()));

		return () => unsubscribe();
	}, []);

	const { status, currentPlayer } = informationState;
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction} ${playerName}`;

	return <InformationLayout>{information}</InformationLayout>;
};
