import './ContentHolder.css'
import { Outlet, useParams } from 'react-router-dom'

const ContentHolder = () => {
    const param = useParams()

    return (
        <div className = "content">
            <h2 className = "content-title"> {param.id} </h2>

            <Outlet />
        </div>
    )
}

export default ContentHolder