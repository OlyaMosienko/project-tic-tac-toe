import styles from './App.module.css';
import { Field, Information } from './components';
import PropTypes from 'prop-types';

export const AppLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	winPatterns,
}) => {
	const resetGame = () => {
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
		setIsDraw(false);
		setIsGameEnded(false);
	};

	return (
		<div className={styles.appLayout}>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				winPatterns={winPatterns}
			/>
			<button className={styles.newGame} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
};

AppLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	winPatterns: PropTypes.array,
};
