import React, {useState} from 'react'
import "./navbar.css"

import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export const Navbar = () => {

    const [active, setActive] = useState('navBar') ;

    const showNav = ()=> {
        setActive('navBar activeNavbar');
    }

    const removeNavbar = ()=> {
        setActive('navBar');
    }


  return (
    <section className='navBarSection' >
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1> <MdTravelExplore className='icon' /> Travel</h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navList flex'>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Главная</a>
                    </li>


                    <li className='navItem'>
                        <a href='#' className='navLink'>О нас</a>
                    </li>


                    <li className='navItem'>
                        <a href='#' className='navLink'>Новости</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Контакты</a>
                    </li>

                    <button className='btn'>
                        <a href="#">Купить билеты</a>
                    </button>

                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
                    < TbGridDots className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar;