import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div className={styles.informationLayout}>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
