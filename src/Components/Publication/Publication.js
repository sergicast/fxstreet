import React, { useState, useEffect } from "react";
import ReactHtmlParser from 'html-react-parser';
import './Publication.scss';
import { DropdownMenu, TellUsWhy } from "../../components";

import searchPage from '../../assets/img/search-page.svg';
import arrowRight from '../../assets/img/arrow-right.svg';
import clock from '../../assets/img/clock.svg';
import dots from '../../assets/img/dots.svg';
import { ReactComponent as Save } from '../../assets/img/save.svg';
import { ReactComponent as Like } from '../../assets/img/like.svg';
import { getFormatDate } from '../../utils';

/**
 * Author data.
 * @typedef AuthorType
 * @property {String} id Id about author.
 * @property {String} name Name of author.
 * @property {String} companyName Company name.
 * @property {String} imageUrl URL image.
 */

/**
 * Publication data.
 * @typedef PublicationType
 * @property {String} id Id about the publication.
 * @property {String} title Title about the publication.
 * @property {String} content Content with string HTML.
 * @property {String} imageUrl URL image.
 * @property {String} publicationTime String date.
 * @property {Boolean} isPopular Data that tells us if it is popular or not.
 * @property {String} feed Feed.
 * @property {String} subFeed Subfeed.
 * @property {AuthorType} author Max value of the Range.
 */

/**
 * Component single publication in news feed.
 * @param {Object} props - The component props.
 * @param {PublicationType} props.publication - Publication info.
 * @returns {React.ReactElement}
 */
export const Publication = ({ publication }) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const [isSubMenu, setIsSubMenu] = useState(false);

    function useOutsideDropdown(ref) {
        useEffect(() => {
            function clickOutsideDropdown(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsSubMenu(false);
                    setIsDropdown(false);
                }
            }
            document.addEventListener("mousedown", clickOutsideDropdown);
            return () => {
                document.removeEventListener("mousedown", clickOutsideDropdown);
            };
        }, [ref]);
    }

    const handleOnClickSubMenu = (hasSubMenu, key) => {
        if (hasSubMenu && key === 'improve') {
            setIsSubMenu(true);
            setIsDropdown(false);
        }
    };

    const handleOnBack = () => {
        setIsDropdown(true);
        setIsSubMenu(false);
    };

    return (
        <div className="publication">

            <div className="publication__header">
                <div className="publication__header--topic">
                    <img src={searchPage} alt='search' />
                    <span>{publication.feed}</span>
                    <img src={arrowRight} alt='arrow' />
                    <span className="publication__header--topic--secundary">{publication.subFeed}</span>
                </div>
                <div className="publication__header--topic--mobile">
                    <div>
                        <img src={searchPage} alt='search' />
                        <span>{publication.feed}</span>
                    </div>
                    <span className=" publication__header--topic--mobile--secundary">{publication.subFeed}</span>
                </div>
                <div className="publication__header--time">
                    <img src={clock} alt='clock' />
                    <span>{getFormatDate(publication.publicationTime)}</span>
                </div>
            </div>

            <div className="publication__author">
                <div className="publication__author--logo">
                    <img src={publication.author.imageUrl} alt='arrow' />
                </div>
                <div className="publication__author--title">
                    <p className="publication__author--title--author">{`${publication.feed} | ${publication.subFeed}`}</p>
                    <p className="publication__author--title--text">{publication.title}</p>
                </div>
            </div>

            <div className="publication__author--mobile">
                <div className="publication__author--mobile--feed">
                    <p className="publication__author--mobile--feed--author">{`${publication.feed} | ${publication.subFeed}`}</p>
                </div>
                <div className="publication__author--mobile--title">
                    <img src={publication.author.imageUrl} alt='arrow' />
                    <p className="publication__author--mobile--title--text">{publication.title}</p>
                </div>
            </div>

            <div className="publication__content">
                {ReactHtmlParser(publication.content)}
                {publication?.imageUrl &&
                    <img src={publication.imageUrl} alt='content img' />}
            </div>

            <div className="publication__options">
                <div className="publication__options--item publication__options--item--like">
                    <Like />
                    <span>Like</span>
                </div>
                <div className="publication__options--item publication__options--item--save">
                    <Save />
                    <span>Save</span>
                </div>
                <div className="publication__options--item">
                    <img src={dots} alt='dots' onClick={() => {
                        if (!isSubMenu) {
                            setIsDropdown(!isDropdown);
                        } else {
                            setIsSubMenu(!isSubMenu);
                        }
                    }} />
                    {isDropdown && <DropdownMenu useOutsideDropdown={useOutsideDropdown} handleOnClickSubMenu={handleOnClickSubMenu} />}
                    {isSubMenu && <TellUsWhy useOutsideDropdown={useOutsideDropdown} handleOnBack={handleOnBack} />}
                </div>
            </div>
        </div>
    );
};
