import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className="question-ans">
            <div className="question-one">
                <h2>Q-1 : How does react work?</h2>
                <p>
                React uses a declarative paradigm that makes it easier to reason about application and aims to be both efficient and flexible. It designs simple views for each state in  application, and React will efficiently update and render just the right component when  data changes.
                </p>
            </div>
            <div className="question-two">
                <h2>Q-2 : How does useState work?</h2>
                <p>useState is a react hook.React create a virtual dom .React compare virtual dom to real dom . to compare, react have to understand where the state has changed.if react does not understand where the has changed,he will not be able to differentiate it .useState is used to explain that this component of react has changed in this state.if the state changes there will be a kick in the rerender.Compare with real dom and then that change will apply it. thats why we used useState</p>
            </div>
        </div>
    );
};

export default Question;