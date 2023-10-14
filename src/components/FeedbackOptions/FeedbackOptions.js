import React from 'react';
import FeedbackOption from '../FeedbackOption/FeedbackOption';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback-options-container">
      {options.map((option) => (
  <FeedbackOption key={option} option={option} onLeaveFeedback={onLeaveFeedback} />
))}
    </div>
  );
}

export default FeedbackOptions;
