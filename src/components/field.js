import { Component } from 'react';
import { connect } from 'react-redux';
import { handleCellClick } from '../handlers';
import { PLAYER_SIGN } from '../constants';
import { selectStatus, selectCurrentPlayer, selectField } from '../selectors';

export class FieldContainer extends Component {
	render() {
		const { field, status, currentPlayer, dispatch } = this.props;

		return (
			<div className="grid grid-cols-3 border border-gray-300">
				{field.map((cellPlayer, i) => (
					<button
						className="w-full min-w-24 h-full min-h-24 text-2xl font-bold bg-transparent border border-gray-300"
						key={i}
						onClick={() =>
							handleCellClick({ field, status, currentPlayer }, i, dispatch)
						}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);
