import React, { useEffect, useState } from "react";
import "./Footer.css";
import footerData from "../../Data/Footer.json";

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(footerData);
  }, []);

  if (!data) return null;

  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <div className="logo">
            <img src={require(`../../assets/${data.contactInfo.logo}`)} alt="Logo" />
          </div>
          <div className="contact">
            <ul>
              <li>Email: <span>{data.contactInfo.email}</span></li>
              <li>Phone: <span>{data.contactInfo.phone}</span></li>
              <li>Address: <span>{data.contactInfo.address}</span></li>
            </ul>
          </div>
        </div>
        
        <div className="box">
          <h4>Information</h4>
          <ul>
            {data.informationLinks.map((link, index) => (
              <li key={index}><a href={link.url}>{link.text}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="box">
          <h4>Quick Shop</h4>
          <ul>
            {data.quickShopLinks.map((link, index) => (
              <li key={index}><a href={link.url}>{link.text}</a></li>
            ))}
          </ul>
        </div>

        <div className="box">
          <h4>Customer Services</h4>
          <ul>
            {data.customerServiceLinks.map((link, index) => (
              <li key={index}><a href={link.url}>{link.text}</a></li>
            ))}
          </ul>
        </div>

        <div className="box">
          <h4>Newsletter</h4>
          <p>{data.newsletterText.description}</p>
          <div className="form">
            <input type="email" name="email" placeholder="Email Address" />
            <button><i className="fa-solid fa-arrow-right-long"></i></button>
          </div>

          <div className="social">
            <ul>
              {data.socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url}><i className={`fa-brands ${social.icon}`}></i></a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;