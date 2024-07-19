import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({
	field,
	setIsDraw,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	winPatterns,
}) => {
	const checkWin = (player) => {
		return winPatterns.some((pattern) => pattern.every((i) => field[i] === player));
	};

	const checkDraw = () => field.every((item) => item !== '');

	const handleFieldChange = (i) => {
		if (isGameEnded || field[i] !== '') return;

		field[i] = currentPlayer;

		if (checkWin(currentPlayer)) {
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	return (
		<div className={styles.fieldLayout}>
			{field.map((item, i) => (
				<button
					className={styles.fieldItem}
					key={i}
					onClick={() => {
						handleFieldChange(i);
						setIsDraw(checkDraw());
					}}
					disabled={field[i] !== ''}
				>
					{field[i]}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setIsDraw: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	winPatterns: PropTypes.array,
};
