import './News.css'
 
const News = (props) => {
    // console.log(props)
    return (
        <a href = {props.link} className = "news-card">
            <div className = "news-img-container">
                <img src = {props.media} className = "news-img" />
                <p className = "news-article"> View Article </p>
            </div>
            <div className = "news-desc">
                <p className = "news-date">may 12, 2022</p>
                <h6 className = "news-title"> {props.title} </h6>
                <p className = "news-text"> {props.summary} </p>
                <div className = "news-extras">
                    {/* location
                    by */}
                </div>
            </div>
        </a>
    )
}

export default News