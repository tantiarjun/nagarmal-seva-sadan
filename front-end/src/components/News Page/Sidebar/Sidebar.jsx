import React, { useState } from "react";
import "./Sidebar.css";
import mini1 from '../../../assets/News Page/Article/Rectangle 61.png';
import mini2 from '../../../assets/News Page/Article/Rectangle 61 (1).png';
import mini3 from '../../../assets/News Page/Article/Rectangle 61 (2).png';
import mini4 from '../../../assets/News Page/Article/Rectangle 61 (3).png';
import mini5 from '../../../assets/News Page/Article/Rectangle 61 (4).png';
import mini6 from '../../../assets/News Page/Article/Rectangle 61 (5).png';


const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');

     const handleChange = (event) => {
       setSearchTerm(event.target.value);
     };
    
     const handleSubmit = (event) => {
       event.preventDefault();
       console.log('Search term:', searchTerm);
     };

  return (
    <div className="sidebar">
      <div className="Side-section">
        
                <div className="recent-posts">
                    <h2 className="title">Recent Posts</h2>
                    <div className="links">
                        <div className="mini-news" id="news1">
                            <img src={mini1} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>

                        <div className="mini-news" id="news1">
                            <img src={mini2} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>

                        <div className="mini-news" id="news1">
                            <img src={mini3} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>

                        <div className="mini-news" id="news1">
                            <img src={mini4} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>

                        <div className="mini-news" id="news1">
                            <img src={mini5} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>

                        <div className="mini-news" id="news1">
                            <img src={mini6} className="mini-img"></img>
                            <div className="mini-text-part">
                               <p className="mini-date">Monday 05, September 2021</p>
                               <p className="mini-title"> This Article's Title goes Here, but not too long.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catagories">
                    <h2 className="catagories-title"> Categories</h2>
                    <div className="catagory-buttons">
                        <div className="catagory" id="catagory 1">
                            <p className="catagory-name">Surgery</p>
                            <p className="stats"> 3 </p>
                        </div>

                        <div className="catagory" id="catagory 2">
                            <p className="catagory-name">Health Care</p>
                            <p className="stats"> 5 </p>
                        </div>

                        <div className="catagory" id="catagory 3">
                            <p className="catagory-name">Medical</p>
                            <p className="stats"> 8 </p>
                        </div>

                        <div className="catagory" id="catagory 4">
                            <p className="catagory-name">Professional</p>
                            <p className="stats"> 10 </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sidebar