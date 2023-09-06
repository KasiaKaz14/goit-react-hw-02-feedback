import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            className={css.button}
            key={index}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ).isRequired,
  index: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};
