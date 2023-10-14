import React from 'react';

function FeedbackOption({ option, onLeaveFeedback }) {
  return (
    <div>
      <button className="feedback-button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </div>
  );
}

export default FeedbackOption;
