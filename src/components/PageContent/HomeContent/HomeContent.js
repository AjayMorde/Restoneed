import React from 'react'
import img1 from '../../../images/menuscan.png'
import img2 from '../../../images/din.png'
import img3 from '../../../images/RestoSol/res1.jpg'
import img4 from '../../../images/RestoSol/res2.jpeg'
import img6 from '../../../images/RestoSol/res3.jpeg'
import './HomeContent.css'
import HomeFeatures from './HomeFeatures'

import './HomeContent.css'

const HomeContent = () => {
    return (
        <>
            <section className="home-section">
                <div className="home-wel">
                    <div ><p>Welcome to <span className="home-wel-heading">Restoneed</span></p></div>
                    <h2 className="head">Savor delicious meals <br /><span className='head1'>Trust us with tech</span></h2>
                    <h6 className='open'>   Boost potential: Go digital for restaurant orders</h6>
                    <div>
                        <button>  Free trial available</button>
                        <button className='btn2'>  Visit our channel </button>

                    </div>
                </div>

                <div className="image-content">
                    <img src={img1} alt="homeImg" />

                </div>
            </section>

            <hr />

            <section className='home-section1'>
                <div className="img2">
                    <img src={img2} alt="img2s" />
                </div>

                <div className='info'>
                    <h1>Restoneeds Effortless Table Ordering</h1>

                    <p>
                        Welcome to Restroneeds! Here, tables turn into canvases, and every meal is a tasty masterpiece.Restroneeds is more than just a spot to eat; it's a journey of flavors and a cheerful celebration of good food.
                        <br /> <br />
                        Our story :kicked off because we love bringing folks together through the joy of delicious meals – making it simple and enjoyable for everyone.
                        <br /><br />
                        Our team is a mix of food enthusiasts and tech lovers. Together, we put in the effort to make your table a special stage for a delightful food experience. From selecting fresh ingredients to making ordering a breeze, we aim to make every visit easy and delightful.
                        <br /><br />
                        Our Vision:
                        Join us in dreaming of a world where every meal is like a flavor fiesta. Picture a place where technology makes things better, yet the simple joy of savoring tasty moments with friends and family remains at the heart of it all.

                    </p>
                </div>


            </section>
            <HomeFeatures />

            <section className='home-section3'>


                <h2>Custom Solutions for Restaurants</h2>

                <div className="resto">

                    <p>We have solutions for different restaurants. We make things easy for singlebr
                        <br />
                    restaurants or big chains. Check out how we can help your restaurant.</p>
                </div>

                <p>Scan the menu effortlessly, then place orders for your favorites with ease</p>
                <div className="resto-sols">
                    <div className="resto-sol">
                        <img src={img3} alt="hotel" />
                        <h3> Cafes </h3>
                        <p>Charming Coffee and Treats</p>
                    </div>
                    <div className="resto-sol">
                        <img src={img4} alt="cafe" />
                        <h3> Restaurants</h3>
                        <p>Diverse Dining Experiences</p>
                    </div>
                    <div className="resto-sol">
                        <img src={img6} alt="bar" />
                        <h3>Ice Cream Park </h3>
                        <p>Scoops of Sweet Delight</p>
                    </div>
                </div>


            </section>






        </>
    )
}

export default HomeContent
