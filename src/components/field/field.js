import { FieldLayout } from './fieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setIsDraw,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	winPatterns,
}) => {
	return (
		<FieldLayout
			field={field}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			winPatterns={winPatterns}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setIsDraw: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	winPatterns: PropTypes.array,
};
