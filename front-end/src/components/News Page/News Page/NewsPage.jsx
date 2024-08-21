// import React, { useState, useEffect } from 'react';
// import './NewsPage.css';
// import Sidebar from '../Sidebar/Sidebar';
// import NewsCard from '../NewsCard';
// import axios from 'axios'; 

// const NewsPage = () => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:3000/news')
//             .then(res => {
//                 setArticles(res.data);
//                 console.log(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.log(err);
//                 setLoading(false); // set loading to false even if there's an error
//             });
//     }, []); // Empty dependency array to run once on mount

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="entire-page">
//             <div className="articles">
//                 {articles.map((article, index) => (
//                     <NewsCard 
//                         key={index}
//                         image={article.image}
//                         date={article.date}
//                         author={article.author}
//                         views={article.views}
//                         likes={article.likes}
//                         title={article.title}
//                         summary={article.summary}
//                         articleID={article._id}
//                     />
//                 ))}
//             </div>
//             <div className="sidebar">
//                 <Sidebar />
//             </div>
//         </div>
//     );
// }

// export default NewsPage;


import React, { useState, useEffect } from 'react';
import './NewsPage.css';
import Sidebar from '../Sidebar/Sidebar';
import NewsCard from '../NewsCard';
import img1 from "../../../assets/News/news1.jpg";
import img2 from "../../../assets/News/news2.jpeg";
// import img3 from "../../../assets/News/news3.png";

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hardcoded dummy data
        const dummyData = [
            {
                _id: "1",
                image: img1,
                date: "2023-08-21",
                // author: "John Doe",
                // views: 150,
                // likes: 35,
                title: "NMMS, Ranchi celebrated Breastfeeding Day on Monday",
                summary: "Breastfeeding provides essential nutrients and strengthens the bond between mother and child. It’s vital for boosting immunity, promoting healthy growth, and ensuring a strong start in life. Our event featured informative sessions.",
            },
            {
                _id: "2",
                image: img2,
                date: "2023-06-30",
                // author: "Jane Smith",
                // views: 250,
                // likes: 70,
                title: "NMMS, Ranchi celebrated Doctor's Day yesterday",
                summary: "The day began with an inspiring keynote address highlighting the critical role doctors play in our lives. This was followed by a series of engaging activities, including interactive sessions and a panel discussion featuring renowned healthcare experts. Attendees shared personal stories.",
            }
        ];

        setArticles(dummyData);
        setLoading(false);
    }, []); // Empty dependency array to run once on mount

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="entire-page">
            <div className="articles">
                {articles.map((article, index) => (
                    <NewsCard 
                        key={index}
                        image={article.image}
                        date={article.date}
                        author={article.author}
                        views={article.views}
                        likes={article.likes}
                        title={article.title}
                        summary={article.summary}
                        articleID={article._id}
                    />
                ))}
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    );
}

export default NewsPage;
