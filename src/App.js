import { AppLayout } from './AppLayout';
import { store } from './store';

export const App = () => {
	const onRestart = () => store.dispatch({ type: 'RESTART_GAME' });

	return <AppLayout onRestart={onRestart} />;
};
