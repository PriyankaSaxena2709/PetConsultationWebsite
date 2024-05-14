import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Consultsection = () =>{
  const [formData, setformData] =useState({
    name: '',
    option: '',
    age: '',
    gender: '',
    breed: '',
    weight: '',
    message: '',
});

const handleInputChange = e=>{
    setformData({...formData, [e.target.name]:e.target.value})
};

  

    return (
    <Wrapper>
        <div className="container grid">
            <div className = "consult-section-data">
                <h1 className="consult-heading">Consult a vet online</h1>
                <p className="consult-para">Book your schedule for an online vet consultation now</p>
            </div>
            {/* <div>
                <img src="./images/hero3.svg" alt ="consult image" />
            </div> */}
        </div>
  

        <div className="container grid grid-two-column">
          <div className="inner-consult-section-image">
            <picture>
              <img src="./images/about2.svg" alt="consult" />
            </picture>
          </div>
          <div className="inner-consult-data">
            <h2 className="inner-consult-heading">Instant Consultation (10am - 7pm)</h2>
            <p className="inner-consult-para1">Book your Schedule for an online vet consultation Now! You will be notified about the Vet assignment shortly.</p>
            <h3 className="inner-consult-para">MRP 200</h3>
            <div className="container">
            <div className="consult-form">
              <form action="#" method="POST" className="consult-input-form">
              <input 
                  type="text" 
                  placeholder="Full Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  required
              />
              <select
                name="option"
                value={formData.option}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your pet</option>
                <option value="Option 1">Dog</option>
                <option value="Option 2">Cat</option>
                <option value="Option 3">Bird</option>
                <option value="Option 3">Other</option>
             </select>

             <input 
                  type="text" 
                  placeholder="Pet's Gender" 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleInputChange}
                  required
              />
              <input 
                  type="text" 
                  placeholder="Pet's Breed" 
                  name="breed" 
                  value={formData.breed} 
                  onChange={handleInputChange}
                  required
              />
              <input 
                  type="text" 
                  placeholder="Pet's Age" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleInputChange}
                  required
              />
              <input 
                  type="text" 
                  placeholder="Pet's Weight" 
                  name="weight" 
                  value={formData.weight} 
                  onChange={handleInputChange}
                  required
              />
              <textarea
                placeholder="Describe your problem"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

             <div className="submitbutton">
              <Button type=" submit" className="consult-submit-button">
                Submit
              </Button>

              </div> 


              </form>

            </div>


          </div>
        </div> 
      </div>
    </Wrapper>

    );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;

  .consult-heading{
    text-transform: uppercase;
    font-size: 5.0rem;
    text-align: center;
  }

  .consult-para{
    text-align: center;
  }

  .grid-two-column{
    margin-top: 75px;
    //border: 2px solid #262323;
    //padding: 30px;
    //Box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  //padding: 5rem 0;

  .inner-consult-heading{
    font-size: 25px;
    text-align: center;
  }

  .inner-consult-para{
    text-align: center;
    margin-top: 20px;

  }

  .inner-consult-para1{
    margin-top: 20px;

  }

  .consult-button{
    max-width: 25rem;
    margin-top: 45px;
  }

  picture{
    text-align: center;
    padding: 5rem 0;
   }

  img {
    max-width: 60%;
    //padding-right: 50px;
   }

  .consult-submit-button{
    padding: 15px 25px;
    border-radius: 5px;
  }

  .container{
    margin-top: 6rem;
    

    .consult-form{
      max-width: 500px;
      margin: auto;
     

      .consult-input-form{
        // display: grid;
        // grid-template-columns: repeat(2, 1fr); /* Two columns */
        // gap: 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;
      }
    }
  
  
  }


`;

export default Consultsection;