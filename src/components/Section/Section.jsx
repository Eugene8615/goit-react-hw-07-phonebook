import PropTypes from 'prop-types';
import styles from './Section.module.css'

function Section({ subTitle, children }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.subTitle}>{subTitle}</h2>
            {children}
        </section>
    );
}

Section.propTypes = {
    subTitle: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section;