import React, { useState } from 'react';
import "./Header.css";
import headerData from "../../Data/Header.json";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const renderMenuItems = (isMobile = false) => (
    headerData.menuItems.map((item, index) => (
      <li key={index}
          onMouseEnter={() => !isMobile && setHoveredIndex(index)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
      >
        <a 
          href={item.link}
          onClick={(e) => {
            if (item.dropdown) {
              e.preventDefault();
              handleMenuClick(index);
            }
          }}
        >
          {item.title}
          {item.dropdown && <i className="fa-solid fa-angle-down"></i>}
        </a>
        {item.dropdown && (hoveredIndex === index || isMobile && openMenu === index) && (
          <ul className={isMobile ? "mobile-submenu" : "dropdown"}>
            {item.dropdown.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a href={subItem.link}>{subItem.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))
  );

  return (
    <div className="header">
      <div className="row-container">
        
        <div className="searchform">
          <button type="submit">
            <i className={headerData.search.iconClass}></i>
          </button>
          <input type="search" placeholder={headerData.search.placeholder} />
        </div>

        <div className="menu">
          <ul>
            {renderMenuItems().slice(0, 3)}
            <li className="logo">
              <img src={logo} alt="Logo" />
            </li>
            {renderMenuItems().slice(3)}
          </ul>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

        <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {renderMenuItems(true)}
          </ul>
        </nav>

        <div className="icons">
          <ul>
            {headerData.icons.map((icon, index) => (
              <li key={index}>
                <a href={icon.link}>
                  <i className={icon.iconClass}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-logo">
            <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
