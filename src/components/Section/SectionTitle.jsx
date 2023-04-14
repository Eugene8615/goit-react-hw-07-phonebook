import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css'

function SectionTitle({ title, children }) {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </section>
    );
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default SectionTitle;