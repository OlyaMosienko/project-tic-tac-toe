import { useState } from 'react';
import { AppLayout } from './AppLayout';
import { WIN_PATTERNS } from './constants';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const winPatterns = WIN_PATTERNS;

	const props = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		winPatterns,
	};

	return <AppLayout {...props} />;
};
