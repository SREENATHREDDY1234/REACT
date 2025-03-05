import React from 'react'
import "./Footor.css"
import facebook_icon from "../../assets/facebook_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import youtube_icon from "../../assets/youtube_icon.png"

const Footor = () => {
  return (
    <div className='footor'>
      <div className="footor-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <div className="footor-links">
        <p>Audio Description</p>
        <p>Help Center</p>
        <p>Gift Cards</p>
        <p>Media Centre</p>
        <p>Investor Relations</p>
        <p>Jobs</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Legal Notices</p>
        <p>Cookie Preferences</p>
        <p>Corporate information</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Footor