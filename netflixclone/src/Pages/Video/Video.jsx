import React, { useState,useEffect } from 'react'
import "./Video.css"
import back_icon from '../../assets/back_arrow_icon.png'
import { useParams,useNavigate } from 'react-router-dom'

const Video = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [apiData,setApiData] = useState({});
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkzYmNiM2E2NDg3OTkxNjVjNDFmNmVhYzk0NjAxMCIsIm5iZiI6MTczNTI5Mzk0MS40NzMsInN1YiI6IjY3NmU3YmY1ZDZkMTBlY2M4YzEyYjJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vrluw6nG2X4tRJB379b2Y6GQzDiGWOQoxOoCjSKQL4A'
    }
    };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    },[])
  return (
    <div className='video'>
        <img className="back_icon" src={back_icon} alt="" onClick = {()=>{navigate("/")}}/>
        <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" allowFullScreen></iframe>
        <div className="player-desc">
            <p>{apiData.published_at}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Video