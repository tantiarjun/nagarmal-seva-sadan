// import React, { useState, useEffect } from 'react';
// import './Gallery.css'
// import Card from '../Gallery Card/GalleryCard';
// import Button from '../../Button/Button';
// import axios from 'axios';

// const NewsGallery = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('http://localhost:3000/gallery')
//       .then(res => {
//         setNewsData(res.data);
//         console.log(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false); // set loading to false even if there's an error
//       });
//   }, []); // Empty dependency array to run once on mount

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="news-gallery">
//       <p className="small_heading"> NEWS GALLERY </p>
//       <h1 className="hospital_name">Nargamal Modi Seva Sadan, Ranchi </h1>
//       <div className="grid">
//         {newsData.map((news, index) => (
//           <Card 
//             key={index} 
//             title={news.title} 
//             image={news.image}
//             country={news.country} 
//             news_title={news.news_title} 
//             news_brief={news.news_brief}
//           />
//         ))}
//       </div>
//       <div className="gallery_button">
//         <Button text="View More" type="secondary" />
//       </div>
//     </div>
//   );
// }

// export default NewsGallery;

import React from 'react';
import './Gallery.css'
import Card from '../Gallery Card/GalleryCard';
import Button from '../../Button/Button';
import news from "../../../assets/Gallery/g1.png";
import news2 from "../../../assets/Gallery/g2.png";
import news3 from "../../../assets/Gallery/g3.png";
import news4 from "../../../assets/Gallery/g4.png";
import news5 from "../../../assets/Gallery/img5.jpg";
import news6 from "../../../assets/Gallery/img6.jpg";
import news7 from "../../../assets/Gallery/img7.jpg";
import news8 from "../../../assets/Gallery/img8.jpg";
import news9 from "../../../assets/Gallery/img9.jpg";
import news10 from "../../../assets/Gallery/img10.jpg";
import news11 from "../../../assets/Gallery/img11.jpg";
import news12 from "../../../assets/Gallery/img12.jpg";

const NewsGallery = () => {
  const newsData = [
    {
      image: news,
    },
    {
      image: news2,
    },
    {
      image: news3,
    },
    {
      image: news4,
    },
    {
      image: news5,
    },
    {
      image: news6,
    },
    {
      image: news7,
    },
    {
      image: news8,
    },
    {
      image: news9,
    },
    {
      image: news10,
    },
    {
      image: news11,
    },
    {
      image: news12,
    }
  ];
  return (
    <div className="news-gallery">
      <p className="small_heading"> NEWS GALLERY </p>
      <h1 className="hospital_name">Nargamal Modi Seva Sadan, Ranchi </h1>
      <div className="grid">
        {newsData.map((news, index) => (
          <Card 
            image={news.image}
          />
        ))}
      </div>
      <div className="gallery_button">
        <Button text="View More" type="secondary" />
      </div>
    </div>
  );
}

export default NewsGallery;