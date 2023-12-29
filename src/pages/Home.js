import React from 'react'
import './pages.css'
import img1 from '../images/menuscan.png'
import img2 from '../images/din.png'
import fe1 from '../images/features/f1.png'
import fe2 from '../images/features/f2.png'
import fe3 from '../images/features/f3.png'
import fe4 from '../images/features/f4.png'
import fe5 from '../images/features/f5.png'
import fe6 from '../images/features/f6.png'




const Home = () => {
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

      <section className='home-section1'>
        <div className="img2">
          <img src={img2} alt="img2s" />
        </div>

        <div className='info'>
          <h1>Restoneeds Effortless Table Ordering</h1>

          <p>
            Welcome to Restroneeds! Here, tables turn into canvases, and every meal is a tasty masterpiece.Restroneeds is more than just a spot to eat; it's a journey of flavors and a cheerful celebration of good food. <br /> <br />
            Our story :kicked off because we love bringing folks together through the joy of delicious meals – making it simple and enjoyable for everyone.  <br /><br />
            Our team is a mix of food enthusiasts and tech lovers. Together, we put in the effort to make your table a special stage for a delightful food experience. From selecting fresh ingredients to making ordering a breeze, we aim to make every visit easy and delightful. <br /><br />
            Our Vision:
            Join us in dreaming of a world where every meal is like a flavor fiesta. Picture a place where technology makes things better, yet the simple joy of savoring tasty moments with friends and family remains at the heart of it all.

          </p>
        </div>


      </section>

      <section className='home-section2'>
        <div className="fe-box">
            <img src={fe1} alt="1" />
            <h6>Effortless Table Ordering</h6>
        </div>
        <div className="fe-box">
            <img src={fe2}  alt="2"/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={fe3} alt="3"/>
            <h6>Save money</h6>
        </div>
        <div className="fe-box">
            <img src={fe4}alt="4"/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src={fe5} alt="5"/>
            <h6>Happy sell</h6>
        </div>
        <div className="fe-box">
            <img src={fe6} alt="6"/>
            <h6>F24/7Support</h6>
        </div>
    </section>




    </>
  )
}

export default Home