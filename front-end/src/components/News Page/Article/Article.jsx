import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ArticleCard from "./ArticleCard";
import axios from 'axios';

function Article() {
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [articleText, setArticleText] = useState(null);
    const [articleImage, setArticleImage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/news/${id}`)
          .then((response) => {
            setArticleText(response.data.content); // Assuming the content field holds the article text
            setArticleImage(response.data.image);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ArticleCard 
            articleImage={articleImage}
            articleText={articleText}
        />
    );
}

export default Article;
