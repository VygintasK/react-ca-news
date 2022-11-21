import Podcast from "./Podcast"
const PodcastsArr = [
    {
        url: "https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png",
        podcastTime: '7:54',
        title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-09-05',
    },
    {
        url: "https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png",
        podcastTime: '7:54',
        title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-09-05',
    },
    {
        url: "https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png",
        podcastTime: '7:54',
        title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-09-05',
    },
]
const Podcasts = () => {
    const podcastList = PodcastsArr.map((element, index) => <Podcast
        key = {index}
        url={element.url}
        podcastTime={element.podcastTime}
        title={element.title}
        date={element.date}

    />)
    
    return (
        <div className="Podcasts">
            {podcastList}
        </div>
    )

}
export default Podcasts