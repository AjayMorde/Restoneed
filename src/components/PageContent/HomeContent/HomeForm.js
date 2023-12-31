import React from 'react'
import { useState } from 'react';

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
            <div className="home-section5">
                <h2>Restaurant Details</h2>
                <form >
                    <input type="text"
                        placeholder='Restaurent Name'
                        id='restaurantName'
                        required
                    />

                    <br /> <br />

                    <input type="text"
                        placeholder='Restaurent Manager Name'
                        id=''
                        required


                    />

                    <br />

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

                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        pattern="[+]91[0-9]{8}"
                        placeholder="+91"
                        required
                    />

                 

                    <br />

                    <input type="text"
                        placeholder='Enter State'
                        id=''
                        required


                    />
                    <br />

                    <input type="text"
                        placeholder='Enter City'
                        id=''
                        required


                    />
                    <br />

                        <input type="text"
                        placeholder='Enter Address'
                        id=''
                        required


                    />
                    <br />

                    

                </form>

            </div>

        </>

    )
}

export default HomeForm
