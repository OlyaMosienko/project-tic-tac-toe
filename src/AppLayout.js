import styles from './App.module.css';
import { Field, Information } from './components';

export const AppLayout = ({ onRestart }) => (
	<div className={styles.appLayout}>
		<Information />
		<Field />
		<button className={styles.newGame} onClick={onRestart}>
			Начать заново
		</button>
	</div>
);
