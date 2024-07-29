import styles from './App.module.css';
import { Field, Information } from './components';
import PropTypes from 'prop-types';
import { STATUS, PLAYER } from './constants';

export const AppLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart,
}) => (
	<div className={styles.appLayout}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />
		<button className={styles.newGame} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);

AppLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
