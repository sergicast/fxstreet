import React from "react";
import './NewsFeedBar.scss';

import { ReactComponent as Filter } from '../../assets/img/filter.svg';

/**
 * Component about the news feed bar for control all the news feed.
 * @param {Object} props - The component props.
 * @param {boolean} props.isLatest - Inform if the latest or popular option is selected.
 * @param {function} props.setIsLatest - Function to set lastest or popular news feed.
 * @returns {React.ReactElement}
 */
export const NewsFeedBar = ({ isLatest, setIsLatest }) => {

    return (
        <div className="newsfeedbar_menu">
            <div className="newsfeedbar_menu--left">
                <ul className="list">
                    <li
                        className={`list__item${isLatest ? '--selected' : ''} list__item--latest`}
                        style={{
                            color: isLatest ? '#E4871B' : '',
                            userSelect: "none"
                        }}
                        onClick={() => setIsLatest(true)}
                        >Latest</li>
                    <li
                        className={`list__item${!isLatest ? '--selected' : ''} list__item--popular`}
                        style={{
                            color: !isLatest ? '#E4871B' : '',
                            userSelect: "none"
                        }}
                        onClick={() => setIsLatest(false)}
                    >Popular</li>
                </ul>
            </div>
            <div className="newsfeedbar_menu--right">
                Show:
                <select data-testid="select" className="select">
                    <option value="hide">All</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                </select>
            </div>
            <div className="newsfeedbar_menu--right--mobile">
                <Filter />
            </div>
        </div>
    );
};
