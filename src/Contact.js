import React from "react";
import { NavLink } from "react-router-dom";
import HomeImage from "../src/Comp/Images/img_home.jpg";
import Common from "./Common";
import { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };
const formSubmit=((event)=>{
    event.preventDefault();
    alert(`My name is ${data.fullname} , phone number is ${data.phone} , email is ${data.email} and i want to say ${data.message}`)

})
//   console.log(data);

  return (
    <>
      <div className="my-5">
        <div className="text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                <h1 style={{fontSize:'16px',
                            fontWeight:'bold',
                            fontFamily:'sans-serif'}}> Name</h1>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  //   onChange={(event) => console.log(event.target)}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                <h1 style={{fontSize:'16px',
                            fontWeight:'bold',
                            fontFamily:'sans-serif'}}>  Phone Number</h1>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                <h1 style={{fontSize:'16px',
                            fontWeight:'bold',
                            fontFamily:'sans-serif'}}>  Email address</h1>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                <h1 style={{fontSize:'16px',
                            fontWeight:'bold',
                            fontFamily:'sans-serif'}} >Message</h1>
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-secondary">
                 <p style={{color:"black",
                            margin:"1px"}}>Submit</p>
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
