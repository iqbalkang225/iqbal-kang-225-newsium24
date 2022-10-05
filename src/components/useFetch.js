import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { insertNews } from '../features/newsSlice';

const useFetch = (topic) => {

    const [isLoading, setIsLoading] = useState(false)
    
    const dispatch = useDispatch()

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7251d6feb3mshccd1577155f923ep14b911jsn1cc6c1923a10',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
      };

    useEffect(() => {

        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${topic}&lang=en`, options)
                
                if(!response.ok) throw new Error("something went wrong")
                const data = await response.json()
                if(!data.articles) return
                dispatch(insertNews(data.articles))
                setIsLoading(false)
            } 
            catch(error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchNews()

      }, [topic])

    return {isLoading}
}

export default useFetch