const Podcast = ({url,podcastTime,title,date}) =>{

    return(
        <div className="podcast">
            <img alt='zz' className="podcast-image" src={url}></img>
            <span className="podcast-time">Trukme: {podcastTime}</span>
            <button className="podcast-play">Play</button>
            <div className="podcast-info">
                <h3 className="podcast-title">{title}</h3>
                <span className="podcast-date">{date}</span>
            </div>
        </div>
    )
}
export default Podcast



    

    
