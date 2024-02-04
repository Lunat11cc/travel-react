import React,{useEffect} from 'react'
import "./footer.css"
import video2 from "../../Assets/video2.mp4"
import { FiSend, FiChevronRight } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai"

import Aos from "aos"
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className="footer">

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h2>Путешествуй с нами</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Почта...' />
            <button data-aos="fade-up" className='btn flex' type='submit'> Написать < FiSend className='icon' /> </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex' >
                <MdOutlineTravelExplore className='icon' />Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Благодарим вас за посещение нашей страницы путешествий и знакомство с миром вместе с нами!
              Присоединяйтесь к нам, поскольку мы продолжаем делиться чудесами путешествий и воплощать ваши мечты в реальность. Счастливого пути!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Наша компания
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Сервис
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Страхование
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Персонал
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Туризм
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Оплата
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Партнеры
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Airbnb
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Kayak
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Trip Advisor
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Популярно
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Лондон
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Калифорния
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Индонезия
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Европа
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Индия
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
          </div>

        </div>

      </div>

    </section>
  )
}

export default Footer;