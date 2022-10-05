import './Home.css'
import Logo from '../assets/mic.jpg'
import { useSelector, useDispatch } from 'react-redux'
import useFetch from '../components/useFetch'
import formatTime from '../components/formatTime'
import { Link } from 'react-router-dom'

const Home = () => {

    const {isLoading} = useFetch("world");
    
    const news = useSelector(store => store.newsStore)
    
    const hotNews = news[Math.floor(Math.random() * 4)]

    console.log(news)

    return (
        <div className = "home-section">
            <div className = "hot-topic">
                <div className = "hot-subheading">
                    <div className = "dot"></div>
                    <p className = "subheading"> HOT TOPIC </p>
                </div>

                <h1 className = "hot-title"> {hotNews && hotNews.title} </h1>

                <div className = "topic-info">
                    <p className = "published-on">Oct 12, 2022</p>
                    <p className = "belongs-to"> {hotNews && hotNews.topic} </p>
                </div>
            </div>

            <div className = "headlines-container">
                {
                    news.map((item,index) => {

                        if(index > 4 && index < 9) {
                            return  <a href = {item.link} className = "headline" key = {index}>
                                        <div className = "headlines-subheading">
                                            <p className = "subheading"> {item.topic} </p>
                                        </div>
                    
                                        <h6 className = "headlines-title"> {item.title} </h6>
                    
                                        <div className = "headlines-info">
                                            <p className = "published-on">{formatTime(item)}</p>
                                            <p className = "from"> twitter/{item.twitter_account} </p>
                                        </div>
                                    </a>
                        }
                    })
                }
            </div>

            <div className = "breaking-news-container">
                <h4 className = "breaking-title-main"> Breaking News </h4>

                <div className = "breaking-news-list">
                    {   
                        news.map((item,index) => {
                            if(index <= 2) {
                                return <a href = {item.link} className = "breaking-news" key = {index}>
                                    <img src = {item.media} className = "breaking-news-img" />
                                    <div className = "breaking-info">
                                        <div className = "breaking-title">
                                            <p className = "published-on">{formatTime(item)}</p>
                                            <p className = "news-location"> {item.country} </p>
                                        </div>
                                        <p className = "breaking-text">
                                        {item.title}
                                        </p>
                                    </div>
                                </a> 

                            }
                        })
                    }
                </div>
            </div>  

            <div className = "own-story">
                <div className = "own-subheading">
                        <p className = "subheading"> Do you have your own story? </p>
                </div>
                <h6 className = "headlines-title"> Write to us and we can publish it.</h6>
            </div>


        </div>
        
    )
}

export default Home