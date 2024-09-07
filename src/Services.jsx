import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="Services-Heading">
        Our Services <div className="services-underline"></div>{" "}
      </div>
      <div className="Service-contents">
        <div className="service service-1">
          <div className="service-1-heading">
            Onsite Branches and Mobile shops
          </div>
          <div className="service-1-images-containor">
            <img
              src="/Images/Juice Shop Service.jpg"
              alt="Juice shop picture"
              className="Service-1-image Service-1-image-1"
            />
            <img
              src="/Images/Juice Bar.jpg"
              alt="Juice bar picture"
              className="Service-1-image Service-1-image-2"
            />
            <img
              src="/Images/Juice truck.jpg"
              alt="Juice shop truck"
              className="Service-1-image Service-1-image-3"
            />
          </div>
        </div>
        <div className="service service-2">
          <div className="service-2-heading">Take away</div>
          <div className="service-2-content">
            <img
              src="/Images/DrinkBottle Poster.jpg"
              alt="Drink bottles"
              className="Service-2-Images Service-2-Images-1"
            />
            <img
              src="/Images/JuiceBottle.jpg"
              alt="Drink bottles"
              className="Service-2-Images Service-2-Images-2"
            />
            <img
              src="/Images/DrinkBottles.jpg"
              alt="Drink bottles"
              className="Service-2-Images Service-2-Images-3"
            />
          </div>
        </div>
        {/* <div className='service service-3'>
          <div className='service-3-heading'>Delivery</div>
        </div> */}
        <div className="service service-4">
          <div className="service-4-heading">Pre reservation</div>
          <p>
            Fruitees facilitates for birth day party and any parties. Here you
            can do prereserve you can enjoy your time here in Fruitees.
          </p>
          <div className="service-4-content">
            <div className="service-4-images">
              <img
                src="/Images/Decoration.jpg"
                alt="BithDar Decoration"
                className="BD-Party-Decoration"
              />
              <img
                src="/Images/BirthDay-Decoration.jpg"
                alt="BithDar Decoration"
                className="BD-Party-Decoration-2"
              />
            </div>
            <p>Click contact button for pre reservation</p>
            <button className="contact-btn">
              {" "}
              <Link to="/Contact" className="contact-btn-link">
                Contact
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className="service service-5">
          <div className="service-5-heading">Uber and Food Panda</div>
          <div className="service-5-content">
            <div className="UberEats-Containor">
              <div className="UberEats-Image-containor">
                <img
                  src="/Images/UberEats-Bag.jpg"
                  alt="UberEats Bag"
                  className="UberEats-Bag"
                />
                <img
                  src="/Images/UberEats.jpg"
                  alt="Uber Eats Delivery Driver"
                  className="UberEats-driver"
                />
              </div>
              <button className="UberEats-btn">Uber Store</button>
            </div>
            <div className="FoodPanda-containor">
              <div className="FoodPanda-Image-containor">
                <img
                  src="/Images/FoodPanda-poster.jpg"
                  alt="Food Panda Poster"
                  className="FoodPanda-poster"
                />
                <img
                  src="/Images/FoodPanda-group.jpg"
                  alt="FoodPanda Group"
                  className="FoodPanda-group"
                />
              </div>
              <button className="FoodPanda-btn">FoodPanda Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
