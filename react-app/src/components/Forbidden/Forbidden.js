import { useEffect, useState } from "react";
import Loading from "../Loading/loading";
import './Forbidden.css'

const Forbidden = () => {

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    })

    if (isLoading === true) return <Loading />

    return (
        <div className='forbiddenBody'>
        <h1 className='forbiddenClass'>
            Sorry, 404 Not Found !
            Please Click on logo(MLS) to go to Home
             <i class="fa-solid fa-heart" style={{color: '#cd9898'}}></i> 
        </h1>
        </div>
    )
}

export default Forbidden