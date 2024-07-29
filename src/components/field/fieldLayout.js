import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.fieldLayout}>
		{field.map((cellPlayer, i) => (
			<button
				className={styles.fieldItem}
				key={i}
				onClick={() => handleCellClick(i)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
