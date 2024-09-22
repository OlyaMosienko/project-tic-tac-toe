import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../constants';
import { selectStatus, selectCurrentPlayer } from '../selectors';

export class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;

		const playerAction = PLAYER_ACTION[status];
		const playerName = PLAYER_NAME[currentPlayer];

		const information =
			status === STATUS.DRAW ? 'Ничья' : `${playerAction} ${playerName}`;

		return <div className="text-5xl font-semibold text-center">{information}</div>;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	status: selectStatus(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
