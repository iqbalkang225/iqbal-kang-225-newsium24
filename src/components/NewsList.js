import './NewsList.css'
import News from './News';
import Loading from './Loading';
import useFetch from './useFetch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewsList = () => {
    
    const param = useParams()

    const news = useSelector(store => store.newsStore)

    const {isLoading }= useFetch(param.id)

    return (
        <div className = "news-list">
            {
                isLoading ? <Loading /> :
                news.map(news => <News key = {news._id} {...news} />)
            }
        </div>
    )
}

export default NewsList