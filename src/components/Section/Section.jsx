import PropTypes from 'prop-types';
import css from './Sections.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
