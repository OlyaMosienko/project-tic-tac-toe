import { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Information } from './components';
import { RESTART_GAME } from './actions';

export class GameContainer extends Component {
	onRestart = () => {
		this.props.dispatch(RESTART_GAME);
	};

	render() {
		return (
			<div className="flex flex-col justify-center items-center gap-8 h-screen">
				<Information />
				<Field />
				<button
					className="text-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none p-3 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
					onClick={this.onRestart}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

export const Game = connect()(GameContainer);
