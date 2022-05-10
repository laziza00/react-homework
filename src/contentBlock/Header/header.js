import React from 'react'
import './header.css'
import logo from '../../images/logo.jpg'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__logo-box'>
                        <a className='' href='#'>
                            <img className='header__img-logo' src={logo}/>
                        </a>
                    </div>
                    <div className='header__input-box'>
                        <div className='header__input'>
                        <i className='bx bx-search-alt-2'></i>
                        <input type='text' placeholder='Type to search'/>
                        </div>
                        <div>
                            <select>
                                <option value="All categories">All categories</option>
                                <option value="Home">Home</option>
                                <option value="About">About</option>
                            </select>
                            
                        </div>
                        <div className='header__btn-box'>
                            <button className='header__btn'>   
                                <i className='bx bx-envelope'></i>Orders
                                </button>
                            <button className='header__btn'>   
                                <i className='bx bx-cart-alt'></i>Cart
                                </button>
                            <button className='header__btn'>  
                                <i className='bx bx-user'></i>Profile
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;