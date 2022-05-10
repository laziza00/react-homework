// import React from 'react'
import React, { Component } from 'react'
import './hero.css'
import heroImg from '../../images/hero-img.jpg'






class Hero extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count:1,
        ccSum:32,  
        ptSum:730,  
      } 
    }
    encrement = () => {
      this.setState({count: this.state.count + 1})
      this.setState({ccSum: this.state.ccSum + 32})
      this.setState({ptSum: this.state.ptSum + 50})
    }
    decrement = () => {
      if(this.state.count > 1){
        this.setState({count: this.state.count - 1})
        this.setState({ccSum: this.state.ccSum - 32})
        this.setState({ptSum: this.state.ptSum - 50})
      }
    }
    nol = () => {
      this.setState({count: this.state.count = 0})
    }
    render() {

    return (
        <div className='hero'>
            <div className='container'>
                <div className='hero__inner'>
                    <div className='hero__img-box'>
                        <img className='hero__img' src={heroImg}></img>
                        <ul className='hero__img-list'>
                            <li className='hero__img-item'>
                                <img className='hero__item-img' src={heroImg}></img>
                            </li>
                            <li className='hero__img-item'>
                                <img className='hero__item-img' src={heroImg}></img>
                            </li>
                            <li className='hero__img-item'>
                                <img className='hero__item-img' src={heroImg}></img>
                            </li>
                            <li className='hero__img-item'>
                                <img className='hero__item-img' src={heroImg}></img>
                            </li>
                            <li className='hero__img-item'>
                                <img className='hero__item-img' src={heroImg}></img>
                            </li>
                        </ul>
                    </div>
                    <div className='hero__main-box'>
                        <p className='hero__text-title'>Mott's</p>
                        <h3 className='hero__text-title__inner'> 
                        mott's unsweetened applecauce</h3>
                        <div className='hero__text-box'>
                            <p className='hero__text-size'>
                                pack size</p>
                            <p className='hero__text-size__inner'>
                                24/16.90  oz</p>
                        </div>
                        <p className='hero__text'>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        </p>
                        <button className='hero__download'>
                        <i className='bx bx-cloud-download' ></i>download spec sheet
                        </button>
                        <hr></hr>
                        <div className='hero__price-box'>
                            <p className='hero__price' >${this.state.ccSum}.80/Cs</p>
                            <p className='hero__text-oz'>(0.21/oz)</p>
                            <p className='hero__price'>${this.state.ptSum} /Pit</p>
                        </div>
                        <div className='hero__price-box'>
                            <p className='hero__price-text'>approx lead time</p>
                            <p className='hero__text-ozi'>12 days</p>
                       
                        </div>
                        <p className='hero__bottom-text'>   is simply dummy text of the print.</p>
                        <div className='hero__num-box'>
                        <div className='hero__btns-box'>
                            <button  className='hero__enc' onClick= {() =>this.encrement()}><i className='bx bx-chevron-up'></i></button>
                            <button  className='hero__enc' onClick= {() =>this.decrement()}><i className='bx bx-chevron-down'></i></button>
                        </div>
                            <button className='hero__num-btn' >
                            <i className='bx bx-cart-add' ></i> 
                            Add to cart
                            </button>
                            <button className='hero__num-btn palet'>
                            <i className='bx bx-cog' ></i> custom pallet
                            </button>
                        </div>
                        <p className='hero__bottom-text'>minimum palet qutatete</p>
                    </div>
                    <div className='hero__info-box'>
                        <ul className='hero__list'>
                            <li className='hero__item'>
                                <div className='hero__pallet-box'>
                                    <p className='hero__del'>1 pallet delivered price</p>
                                </div>
                                <div className='hero__pallet-inner'>
                                    <p>$5,65/Cs</p>
                                    <p>$565.13/Pit</p>
                                    <p className='hero__palet-text'>0.002/oz</p>
                                </div>
                            </li>
                            <li className='hero__item'>
                                <div className='hero__pallet-box'>
                                    <p className='hero__del'>1 pallet delivered price</p>
                                </div>
                                <div className='hero__pallet-inner'>
                                    <p>$5,65/Cs</p>
                                    <p>$565.13/Pit</p>
                                    <p className='hero__palet-text'>0.002/oz</p>
                                    <p>save up to 12%</p>
                                </div>
                            </li>
                            <li className='hero__item'>
                                <div className='hero__pallet-box'>
                                    <p className='hero__del'>1 pallet delivered price</p>
                                </div>
                                <div className='hero__pallet-inner'>
                                    <p>$5,65/Cs</p>
                                    <p>$565.13/Pit</p>
                                    <p className='hero__palet-text'>0.002/oz</p>
                                    <p>save up to 12%</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className='hero__add-wish'>
                <i class='bx bx-star' ></i> add to wishlist
                </button>
            </div>
        </div>
    )
}
}

export default Hero;



