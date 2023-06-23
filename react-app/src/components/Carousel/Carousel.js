import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { thunkAllPosts } from "../../store/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Carousel.css'


const CarouselImages = () => {


    const responsive = {
        desktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 1000 },
          items: 1,
          slidesToSlide: 1,

        }
    }
    return (
            <Carousel
            responsive={responsive}
            className='carousel'
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            ssr={true}
            autoPlaySpeed={5000}
            >
                <div>
                <img className='carouselImg' src='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/Screenshot+2023-06-22+at+8.03.38+AM.png'></img>
                </div>
                <div>
                <img className='carouselImg' src='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/Screenshot+2023-06-22+at+8.04.36+AM.png'></img>
                </div>
                <div>
                <img className='carouselImg' src='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/Screenshot+2023-06-22+at+8.05.15+AM.png'></img>
                </div>
                <div>
                <img className='carouselImg' src='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/Screenshot+2023-06-22+at+8.13.53+AM.png'></img>
                </div>
            </Carousel>
        )
}

export default CarouselImages