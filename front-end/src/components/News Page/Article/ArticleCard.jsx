import React from "react";
import "./Article.css";
import Sidebar from "../Sidebar/Sidebar";
import next from '../../../assets/News Page/Article/Vector (1).png';
import previous from '../../../assets/News Page/Article/Vector (2).png';


function ArticleCard({ articleImage, articleText }) {
    return (
        <div className="article-page" >
            <div className="main-article">
                <img src={articleImage} alt="Article" className="article-img"></img>
                <p className="article-text">{articleText}</p>
                
                <div className="buttons-article">
                    <button className="prev">
                        <img src={previous} className="arrow"/>
                        Previous Article  
                    </button>
                    <button className="next">
                        Next Article
                        <img src={next} className="arrow"/>
                    </button>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default ArticleCard;