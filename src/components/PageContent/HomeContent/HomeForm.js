import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'
import { useState } from 'react';
import cont1 from '../../../images/ContactUs/cont2.jpg'

const onChange=()=>{

}

const HomeForm = () => {

    const [selectedCountry, setSelectedCountry] = useState({
        code: '+91',
        name: 'India'
    });

    const handleCountryChange = (e) => {
        const selectedOption = e.target.value.split(',');
        setSelectedCountry({
            code: selectedOption[0],
            name: selectedOption[1],
        });
    };



    const countryOptions = [
        { code: '+91', name: 'India' },

        { code: '+1', name: 'United States' },
        { code: '+44', name: 'United Kingdom' },

    ];
    return (

        <>

             <h1 style={{textAlign:'center',marginBottom:'80px', fontSize:'40px'}}>
             Let's Begin with a Demo
             </h1>
            <div className="home-section5">

                <div className='form1'>

                    
                    <form >
                        <input type="text"
                            placeholder='Restaurent Name'

                            id='restaurantName'
                            required
                        />

                        <br /> <br />

                        <input type="text"
                            placeholder='Restaurent Manager Name'
                            id='ManagerName'
                            required


                        />

                        <br /> <br />

                        <select
                            id="countryCode"
                            name="countryCode"
                            value={`${selectedCountry.code},${selectedCountry.name}`}

                            onChange={handleCountryChange}
                        >
                            {countryOptions.map((country, index) => (
                                <option key={index} value={`${country.code},${country.name}`}>
                                    {`${country.name} (${country.code})`}
                                </option>
                            ))}
                        </select>
                        <br /> <br />

                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            pattern="[+]91[0-9]{8}"
                            placeholder="Manager Mobile Number"
                            required
                        />



                        <br /> <br />

                        <input type="text"
                            placeholder='Enter State'
                            id=''
                            required


                        />
                        <br /> <br />

                        <input type="text"
                            placeholder='Enter City'
                            id=''
                            required


                        />
                        <br /> <br />

                        <input type="text"
                            placeholder='Enter Address'
                            id=''
                            required


                        />
                        <br /> <br />

                        <ReCAPTCHA
                        
                           sitekey="6LfXmEEpAAAAAI5trHR57Fde-9BabKsmGdIAr69f"
                           onChange={onChange}
                        />,   

                        <br /> <br />

                        <button>Submit</button>




                    </form>

                </div>


                <div className='img'>
                    <img src={cont1} alt="demo-img" />
                </div>





            </div>




        </>



    )
}

export default HomeForm
