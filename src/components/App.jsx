import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [goodnum, setGood] = useState(0);
  const [neutralnum, setNeutral] = useState(0);
  const [badnum, setBad] = useState(0);

  const hendleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(goodnum + 1);
        break;
      case 'neutral':
        setNeutral(neutralnum + 1);
        break;
      case 'bad':
        setBad(badnum + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const totalFeedback = goodnum + neutralnum + badnum;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = total => {
    const positiveFeedback = Math.round((goodnum / total) * 100) || 0;
    return positiveFeedback;
  };

  const total = countTotalFeedback();
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={hendleFeedback}
        options={['good', 'neutral', 'bad']}
      />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={goodnum}
          neutral={neutralnum}
          bad={badnum}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </Section>
  );
};
