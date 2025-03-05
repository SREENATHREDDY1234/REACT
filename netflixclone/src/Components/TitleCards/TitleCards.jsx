import React,{useEffect, useRef, useState} from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'
import {Link}from "react-router-dom"

const TitleCards = ({title,category}) => {
    const cardsRef = useRef();
    const [data,setData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkzYmNiM2E2NDg3OTkxNjVjNDFmNmVhYzk0NjAxMCIsIm5iZiI6MTczNTI5Mzk0MS40NzMsInN1YiI6IjY3NmU3YmY1ZDZkMTBlY2M4YzEyYjJhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vrluw6nG2X4tRJB379b2Y6GQzDiGWOQoxOoCjSKQL4A'
        }
    };
    const handleWheel = (e)=>{
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel);
    },[])


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setData(res.results))
        .catch(err => console.error(err));
    },[])
    return (
    <div className='title-cards'>
        <h2 className='card-list-heading'>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref = {cardsRef}>
            {
                data.map((each_card)=>{
                    return(
                    <div key = {each_card.id}><Link to = {`/player/${each_card.id}`}>
                    <div className="each-card">
                        <img src={"https://image.tmdb.org/t/p/w500"+each_card.backdrop_path} alt="" />
                        <p>{each_card.original_title}</p>
                    </div></Link></div>)
                })
            }
        </div>
        
    </div>
  )
}

export default TitleCards