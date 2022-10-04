import './Home.css'
import Logo from '../assets/mic.jpg'

const Home = () => {
    return (
        <div className = "home-section">
            <div className = "hot-topic">
                <div className = "hot-subheading">
                    <div className = "dot"></div>
                    <p className = "subheading"> HOT TOPIC </p>
                </div>

                <h1 className = "hot-title"> Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.</h1>

                <div className = "topic-info">
                    <p className = "published-on">May 12, 2022</p>
                    <p className = "belongs-to"> World </p>
                </div>
            </div>

            <div className = "headlines-container">
                <div className = "headline">
                    <div className = "headlines-subheading">
                        <p className = "subheading"> Tech</p>
                    </div>

                    <h6 className = "headlines-title"> Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.</h6>

                    <div className = "headlines-info">
                        <p className = "published-on">May 12, 2022</p>
                        <p className = "from"> twitter/@pxbay </p>
                    </div>
                </div>

                <div className = "headline">
                    <div className = "headlines-subheading">
                        <p className = "subheading"> Tech</p>
                    </div>

                    <h6 className = "headlines-title"> Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.</h6>

                    <div className = "headlines-info">
                        <p className = "published-on">May 12, 2022</p>
                        <p className = "from"> twitter/@pxbay </p>
                    </div>
                </div>

                <div className = "headline">
                    <div className = "headlines-subheading">
                        <p className = "subheading"> Tech</p>
                    </div>

                    <h6 className = "headlines-title"> Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.</h6>

                    <div className = "headlines-info">
                        <p className = "published-on">May 12, 2022</p>
                        <p className = "from"> twitter/@pxbay </p>
                    </div>
                </div>
            </div>

            <div className = "breaking-news-container">
                <h4 className = "breaking-title-main"> Breaking News </h4>

                <div className = "breaking-news-list">
                    <div className = "breaking-news">
                        <img src = {Logo} className = "breaking-news-img" />
                        <div className = "breaking-info">
                            <div className = "breaking-title">
                                <p className = "published-on">May 12, 2022</p>
                                <p className = "news-location"> India </p>
                            </div>
                            <p className = "breaking-text">
                            Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.
                            </p>
                        </div>
                    </div>

                    <div className = "breaking-news">
                        <img src = {Logo} className = "breaking-news-img" />
                        <div className = "breaking-info">
                            <div className = "breaking-title">
                                <p className = "published-on">May 12, 2022</p>
                                <p className = "news-location"> India </p>
                            </div>
                            <p className = "breaking-text">
                            Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.
                            </p>
                        </div>
                    </div>

                    <div className = "breaking-news">
                        <img src = {Logo} className = "breaking-news-img" />
                        <div className = "breaking-info">
                            <div className = "breaking-title">
                                <p className = "published-on">May 12, 2022</p>
                                <p className = "news-location"> India </p>
                            </div>
                            <p className = "breaking-text">
                            Officia quis ullamco laborum eu fugiat do mollit sint cillum occaecat sint.
                            </p>
                        </div>
                    </div>

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