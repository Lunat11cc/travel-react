import React, {useEffect} from 'react'
import "./main.css"
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Бора-Бора',
    location: 'Новая Зеландия',
    fees: '$700',
    description: 'Источник Романтики, Бора-Бора - одно из лучших путешествий в мире. Это место известно своими роскошными проживаниями и приключенческими активностями.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Мачу-Пикчу',
    location: 'Перу',
    fees: '$600',
    description: "Гуайна Пикчу - это гора в Перу, возвышающаяся над Мачу-Пикчу, так называемым Потерянным городом инков. Это место популярно среди туристов, потому что восход с Ворот Солнца просто впечатляющий."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Великий Барьерный Риф',
    location: 'Австралия',
    fees: '$700',
    description: "Одним из наиболее выдающихся природных богатств Австралии является Великий Барьерный Риф. Знаковыми для этого места являются 'роскошь' и 'красота'. Всегда интересно быть здесь."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Каппадокия',
    location: 'Турция',
    fees: '$800',
    description: 'Согласно Рейтингу мирового туризма, 45 миллионов человек посещают Турцию каждый год, и из них около 2 миллионов приезжают посетить Каппадокию. Это место известно своими роскошными проживаниями и приключенческими активностями.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Гуанахуато',
    location: 'Мексика',
    fees: '$1100',
    description: 'Город в центральной Мексике. Гуанахуато известен своей историей серебряного рудника и колониальной архитектурой. Дома в городе очень привлекательно окрашены самыми яркими цветами, доступными. Всегда Добро пожаловать.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Чинкве-Терре',
    location: 'Италия',
    fees: '$840',
    description: 'Яркие оттенки домов - это его главный показатель и объяснение красоты этого места. Кроме того, если вы любите еду и обожаете морепродукты, вам будет приятно удивлен выбором, который вы получите здесь. Счастливого исследования великой еды.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Ангкор Ват',
    location: 'Камбоджа',
    fees: '$790',
    description: 'Ангкор Ват представляет собой весь спектр кхмерского искусства с 9 по 15 век. Этот храм считается сердцем и душой Камбоджи. Это место известно своими роскошными проживаниями и приключенческими активностями.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Тадж-Махал',
    location: 'Индия',
    fees: '$900',
    description: 'Огромный мавзолей из белого мрамора, построенный в Агре могольским императором Шах Джаханом в память о его жене Мумтаз.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Остров Бали',
    location: 'Индонезия',
    fees: '$500',
    description: 'Бали - индонезийский остров и одно из лучших мест для отдыха в индонезийском архипелаге. Бали известен своими вулканическими горами, историей, искусством и культурой, кулинарией, храмами и красивыми песчаными пляжами.'
  },
];

export const Main = () => {

    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <section className='main container section'>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Подробнее <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>


    </section>
  )
}

export default Main;