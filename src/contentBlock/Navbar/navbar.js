import React from 'react'
import './navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__inner'>
                    <nav className='navbar__nav'>
                        <ul className='navbar__list'>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    food service
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    health & beauty
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    industrial ingredients
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    bevarges
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    pet supplies
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    frozeen
                                </a>
                            </li>
                            <li className='navbar__item'>
                                <a className='navbar__link'>
                                    cleaning products
                                </a>
                            </li>
                        </ul>
                    </nav>
                <div className='navbar__box'>
                    <ul className='navbar__box-list'>
                        <li className='navbar__box-item'>
                        <a className='navbar__box-link'>
                                    frozen <i className='bx bx-chevron-right' ></i>
                        </a>
                        </li>
                        <li className='navbar__box-item'>
                        <a className='navbar__box-link'>
                                    juice <i className='bx bx-chevron-right' ></i>
                        </a>
                        </li>
                        <li className='navbar__box-item'>
                        <a className='navbar__box-link'>
                                    mott's unsweetened applecauce<i className='bx bx-chevron-right' ></i>
                        </a>
                        </li>
                    </ul>
                </div>
                <button className='navbar__back'>
                     <i className='bx bx-arrow-back'></i>
                </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;