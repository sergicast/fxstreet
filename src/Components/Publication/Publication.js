import React from "react";
import ReactHtmlParser from 'html-react-parser';
import './Publication.scss';

import searchPage from '../../assets/img/search-page.svg';
import arrowRight from '../../assets/img/arrow-right.svg';
import clock from '../../assets/img/clock.svg';
import save from '../../assets/img/save.svg'
import like from '../../assets/img/like.svg'
import dots from '../../assets/img/dots.svg'
import { getFormatDate } from '../../utils'

export const Publication = ({ publication }) => {
    return (
        <div className="publication">
            <div className="publication__header">
                <div className="publication__header--topic">
                    <img src={searchPage} alt='search' />
                    <span>{publication.feed}</span>
                    <img src={arrowRight} alt='arrow' />
                    <span className="publication__header--topic--secundary">{publication.subFeed}</span>
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
                    <p className="publication__author--title--author">FXStreet Team | FXStreet</p>
                    <p className="publication__author--title--text">{publication.title}</p>
                </div>
            </div>
            <div className="publication__content">
                {ReactHtmlParser(publication.content)}
                {publication?.imageUrl &&
                    <img src={publication.imageUrl} alt='content img' />}
            </div>
            <div className="publication__options">
                <div className="publication__options--item">
                    <img src={like} alt='like' />
                    <span>Like</span>
                </div>
                <div className="publication__options--item">
                    <img src={save} alt='save' />
                    <span>Save</span>
                </div>
                <div className="publication__options--item">
                    <img src={dots} alt='dots' />
                </div>
            </div>
        </div>
    );
};
