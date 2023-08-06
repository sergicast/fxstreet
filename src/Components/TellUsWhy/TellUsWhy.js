import React, { useState } from "react";
import './TellUsWhy.scss';

import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';


export const TellUsWhy = ({ handleOnBack }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOnSelect = ({ target: { value } }) => {
        setSelectedOption(value);
    };

    return (
        <div className="tellus">
            <div
                className="tellus__item tellus__item--title"
                onClick={() => handleOnBack()}
            >
                <ArrowLeft />
                <span>Tell us why:</span>
            </div>
            <div className="tellus__item--radiogroup">
                <label>
                    <input
                        type="radio"
                        value="noAuthor"
                        checked={selectedOption === "noAuthor"}
                        onChange={handleOnSelect}
                    />
                    I’m not interested in this author
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOnSelect}
                    />
                    I’m not interested in this topic
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleOnSelect}
                    />
                    I’ve seen too many posts on this topic
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option4"
                        checked={selectedOption === "option4"}
                        onChange={handleOnSelect}
                    />
                    The information is incorrect
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option5"
                        checked={selectedOption === "option5"}
                        onChange={handleOnSelect}
                    />
                    I’ve seen this post before
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="option6"
                        checked={selectedOption === "option6"}
                        onChange={handleOnSelect}
                    />
                    Other reasons
                </label>
            </div>
            <div className="tellus__item--button">
                <button style={{
                    opacity: selectedOption ? 1 : 0.3,
                    cursor: selectedOption ? 'pointer' : 'auto',
                }}>Hide content</button>
            </div>
        </div>
    );
};
