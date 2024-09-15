import { useDispatch } from 'react-redux';
import { RESTART_GAME } from './actions';
import { AppLayout } from './AppLayout';

export const App = () => {
	const dispatch = useDispatch();
	const onRestart = () => dispatch(RESTART_GAME);

	return <AppLayout onRestart={onRestart} />;
};
