import React, { Component, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendleFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }

    const countTotalFeedback = () => {
      const totalFeedback = good + neutral + bad;
      return totalFeedback;
    };

    const countPositiveFeedbackPercentage = total => {
      const positiveFeedback = Math.round((good / total) * 100) || 0;
      return positiveFeedback;
    };

    const total = countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={hendleFeedback}
          options={{ name, neutral, bad }}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  };
};
