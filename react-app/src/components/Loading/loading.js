import React from 'react'
import { Hearts } from 'react-loader-spinner'
import './loading.css'
const Loading = () => {
    return (
        <div className='loadingPage'>
        <Hearts 
        height="500"
        width="500"
        color="#cd9898"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
    )
}

export default Loading