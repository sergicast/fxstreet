import React from "react";
import './NewsFeedBar.scss';


export const NewsFeedBar = ({ isLatest, setIsLatest }) => {


    return (
        <div className="newsfeedbar_menu">
            <div className="newsfeedbar_menu--left">
                <ul className="list">
                    <li
                        className={`list__item${isLatest ? '--selected' : ''} list__item--latest`}
                        onClick={() => setIsLatest(true)}
                    >Latest</li>
                    <li
                        className={`list__item${!isLatest ? '--selected' : ''} list__item--popular`}
                        onClick={() => setIsLatest(false)}
                    >Popular</li>
                </ul>
            </div>
            <div className="newsfeedbar_menu--right">
                Show:
                <select className="select">
                    <option value="hide">All</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                </select>
            </div>
        </div>
    );
};