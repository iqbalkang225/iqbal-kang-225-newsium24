import './NewsList.css'
import { Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import News from './News';
import Loading from './Loading';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7251d6feb3mshccd1577155f923ep14b911jsn1cc6c1923a10',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  };


const NewsList = () => {
    const param = useParams()

    const [newsData, setNewsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${param.id}&lang=en`, options)
                
                if(!response.ok) throw new Error("something went wrong")
                const data = await response.json()
                if(!data.articles) return
                setNewsData(data.articles)
                setIsLoading(false)
            } 
            catch(error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchNews()

      }, [param.id])

    return (
        <div className = "news-list">
            {
                isLoading ? <Loading />:
                newsData.map(news => <News key = {news._id} {...news} />)
            }

        </div>
    )
}

export default NewsList