import React, { useEffect, useState } from 'react'
import "./Feed.css"
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {Link} from 'react-router-dom'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import moment from 'moment';

const Feed = ({category}) => {
  const [apiData,setApiData] = useState([]);

  const loadApiData = async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
    const res = await data.json();
    setApiData(res.items);
  } 
  useEffect(()=>{
    loadApiData();
  },[category])

  return (
    <div className="feed">
        {
            apiData.map((eachObj,index)=>{
                return(
                    <Link key = {index} to =  {`video/${eachObj.snippet.categoryId}/${eachObj.id}`}>
                        <div className='card'>
                            <img src={eachObj.snippet.thumbnails.medium.url} alt="" />
                            <h2>{eachObj.snippet.title}</h2>
                            <h3>{eachObj.snippet.channelTitle}</h3>
                            <p>{value_converter(eachObj.statistics.viewCount)} views &bull; {moment(eachObj.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    
  )
}

export default Feed