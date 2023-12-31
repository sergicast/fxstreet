import React, { useEffect, useState } from "react";
import { NewsFeedBar, Publication } from '../../components';
import './NewsFeed.scss';
import { getFeeds } from '../../services';

/**
 * News feed component.
 * @returns {React.ReactElement}
 */
export const NewsFeed = () => {

    const [publications, setPublications] = useState([]);
    const [isLatest, setIsLatest] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await getFeeds();
            setPublications(res);
        })();
    }, []);


    return (
        <div className="newsfeed">
            <NewsFeedBar
                isLatest={isLatest}
                setIsLatest={setIsLatest}
            />
            {
                publications &&
                publications.map(publi => (!isLatest && publi.isPopular) || (isLatest) ?
                    <Publication key={publi.id} publication={publi} /> :
                    <> </>
                )
            }
        </div>
    );
};
