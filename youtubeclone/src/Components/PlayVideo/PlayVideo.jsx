import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {
    const [apiData,setApiData] = useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentsData,setCommentsData] = useState([]);

    const fetchApiData = async ()=>{
        const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetail_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }
    const fetchChannelData = async()=>{
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${(apiData)?apiData.snippet.channelId:"UC_x5XG1OV2P6uZZ5FSM9Ttw"}&key=${API_KEY}` 
        await fetch(channel_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
        
    }
    const fetchCommentsData = async()=>{
        const conmments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoId}&key=${API_KEY}`
        await fetch(conmments_url).then(res=>res.json()).then((data)=>setCommentsData(data.items))
    }
    useEffect(()=>{
        fetchApiData();
    },[videoId])
    useEffect(()=>{
        fetchChannelData();
    },[apiData])
    useEffect(()=>{
        fetchCommentsData();
    },[])

  return (
    <div className='play-video'>
        <iframe width="702" height="395" src={`https://www.youtube.com/embed/${videoId}`} title={"Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):"155"}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />share</span> 
                <span><img src={save} alt="" />share</span> 
            </div>
        </div>
        <hr />
        <div className="publisher">
           <img src={channelData?channelData.snippet.thumbnails.default.url:jack} alt="" />
           <div>
            <p>{apiData?apiData.snippet.channelTitle:"Channel Title"}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} subscribers</span> 
           </div>
           <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
            <hr />
            <h4>{apiData?apiData.statistics.commentCount:"102"} comments</h4>
            {
                commentsData.map((eachcomment,index)=>{
                    return(
                        <div className='comment' key={index}>
                            <img src={eachcomment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{eachcomment.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(eachcomment.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
                                <p>{(eachcomment.snippet.topLevelComment.snippet.textDisplay).slice(0,100)}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{eachcomment.snippet.topLevelComment.snippet.likeCount}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
)}


export default PlayVideo