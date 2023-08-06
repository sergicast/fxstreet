import React from "react";
import './RightSection.scss';

/**
 * Right section component.
 * @returns {React.ReactElement}
 */
export const RightSection = () => {
    return (
        <section className="right-section">
            <div data-testid="div" className="right-section__boxone"></div>
            <div data-testid="div" className="right-section__boxtwo"></div>
        </section>
    );
};
