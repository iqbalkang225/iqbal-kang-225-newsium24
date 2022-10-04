import { TiWeatherSunny } from 'react-icons/ti'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Header.css'

const Header = () => {
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
                    <p className = "day">Wednesday</p>
                    <p className = "hours">16:00</p>
                </div>

            </div>

            <Navigation />
        </header>
    )
}

export default Header