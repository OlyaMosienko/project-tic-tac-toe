import { useState, useEffect } from 'react';
import { store } from '../../store';
import { FieldLayout } from './fieldLayout';
import { handleCellClick } from '../../handlers/handle-cell-click';
import { PLAYER_SIGN } from '../../constants';

export const Field = () => {
	const [fieldState, setFieldState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setFieldState(store.getState()));

		return () => unsubscribe();
	}, []);

	const { field } = fieldState;

	return (
		<FieldLayout>
			{field.map((cellPlayer, i) => (
				<button key={i} onClick={() => handleCellClick(fieldState, i)}>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</FieldLayout>
	);
};
