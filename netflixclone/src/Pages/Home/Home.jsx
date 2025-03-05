import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footor from '../../Components/Footer/Footor'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
            <img src={hero_banner} alt="" className='hero-banner'/>
            <div className="caption">
                <img className="title-img" src={hero_title} alt="" />
                <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy</p>
                <div className="hero-btns">
                    <button className='btn play-btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn info-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
            </div>
            
        </div>
        <div className="more-cards">
            <TitleCards title = {"Popular on Netflix"} category={"popular"}/>
             <TitleCards title = {"Now Playing"} category={"now_playing"}/>
            <TitleCards title = {"Top Rated"} category={"top_rated"}/>
            <TitleCards title = {"Upcoming"} category={"upcoming"}/>
            {/* <TitleCards title = "Top Pics for You"/> */}
        </div>
        <Footor/>
    </div>
  )
}

export default Home