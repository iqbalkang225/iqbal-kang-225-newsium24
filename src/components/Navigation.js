import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className = "navigation">
            <ul className = "nav-menu section-center">
                <li className = "nav-item">
                    <Link to = "/"> Home </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "world"> World </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "finance"> Finance </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "tech"> Tech </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "sports"> Sports </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "entertainment"> Entertainment </Link>
                </li>

                <li className = "nav-item">
                    <Link to = "science"> Science </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation