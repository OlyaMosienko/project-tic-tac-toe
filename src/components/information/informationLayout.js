import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ information }) => (
	<div className={styles.informationLayout}>{information}</div>
);

InformationLayout.propTypes = {
	information: PropTypes.string,
};
