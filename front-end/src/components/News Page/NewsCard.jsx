import React from 'react';
import './NewsCard.css';
import { Link } from 'react-router-dom';
import calender from '../../assets/News Page/calender.svg'
import person from '../../assets/News Page/person.svg'
import view from '../../assets/News Page/view.svg'
import like from '../../assets/News Page/like.svg'
import Next from '../../assets/News Page/Next.svg'
import Button from '../Button/Button';

const NewsCard = ({ image, date, author, views, likes, title, summary, articleID }) => {
    return (
        <div className="article-card">
            <div className="article-components">
                <img className="article-image" src={image} alt="Article" />
                <div className="article-info">
                    <div className="article-info-one">
                        <img src={calender} alt="Calendar" />
                        <p>{date}</p>
                        {/* <img src={person} alt="Person" /> */}
                        {/* <p>By {author}</p> */}
                    </div>
                    {/* <div className="article-info-stats">
                        <img src={view} alt="View" />
                        <p>{views}</p>
                        <img src={like} alt="Like" />
                        <p>{likes}</p>
                    </div> */}
                </div>
                <h1 className='article-heading'>{title}</h1>
                <p className='article-text'>{summary}</p>
                <Link to={`/news/${articleID}`}>
                    <Button text="Read More" className="read-more-article" icon={Next}/>
                </Link>
            </div>
        </div>
    );
}

export default NewsCard;
