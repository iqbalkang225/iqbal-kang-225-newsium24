import { TiWeatherSunny } from 'react-icons/ti'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Header.css'

const Header = () => {

    const today = new Date();
    const day = today.toLocaleString("en-US", { weekday: "long" });
    const time = `${today.getHours()}:${String(today.getMinutes()).padStart(2, "0")}`
  
    return (
        <header>
            <div className = "summary-container section-center">
                <div className = "weather">
                    <p className = "location"> Modesto </p>
                    <TiWeatherSunny className = "icon" />
                    <p className = "degree"> 28<span>&#176;</span>C </p>
                </div>

                <Link to = "/">
                    <img src = {Logo} className = "logo" />
                </Link>

                <div className = "time">
                    <p className = "day">{day}</p>
                    <p className = "hours">{time}</p>
                </div>

            </div>

            <Navigation />
        </header>
    )
}

export default Header