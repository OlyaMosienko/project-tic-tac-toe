import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayer, selectField, selectStatus } from '../../selectors';
import { FieldLayout } from './fieldLayout';
import { handleCellClick } from '../../handlers';
import { PLAYER_SIGN } from '../../constants';

export const Field = () => {
	const field = useSelector(selectField);
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const dispatch = useDispatch();

	return (
		<FieldLayout>
			{field.map((cellPlayer, i) => (
				<button
					key={i}
					onClick={() =>
						handleCellClick({ field, status, currentPlayer }, i, dispatch)
					}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</FieldLayout>
	);
};
