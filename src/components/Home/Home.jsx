import React, {useEffect} from 'react'
import "./home.css"
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiYoutube} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'

import Aos from "aos"
import 'aos/dist/aos.css'

export const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <h1 data-aos="fade-up" className="homeTitle">Путешествуй с теми, кого любишь</h1>

                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Выбрать место:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Страна или город....'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Выбрать дату:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Максимальная цена:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='5000' min='1000'/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon'/>
                        <span>Фильтры</span>
                    </div>


                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">

                    <div className="rightIcons">
                        <FiYoutube className='icon'/>
                        <AiOutlineInstagram className='icon'/>
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Home;