import React, { useEffect } from "react";

import './NewsFeed.scss';
import { getFeeds } from '../../services';

export const NewsFeed = () => {

    useEffect(() => {
        (async () => {
            const res = await getFeeds();
            console.log(res);
        })();
    }, []);


    return (
        <div className="newsfeed">
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
            <p>news feed</p>
        </div>
    );
};
