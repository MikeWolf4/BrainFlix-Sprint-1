import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return <div className="header-container">
            <div className="header__logo-container">
                <img className="header__logo" src={require("../assets/Logo/Logo-brainflix.svg")} alt="BrainFlix Logo"/>
            </div>




            <div className="header__search-container">
                <a className="header__search-button" itemID="searchButton" href=""><img src={require("../assets/Icons/SVG/Icon-search.svg")} alt=""/></a>
                <input className="header__search-input" placeholder="Search" type="text"/>
            </div>





            <div className="header__upload-container">
                <a className="header__upload-button" href=""><img className="header__upload-button-plus" src={require("../assets/Icons/SVG/Icon-upload.svg")} alt=""/>Upload</a>
                <img className="header__upload-icon" src={require("../assets/Images/Mohan-muruge.jpg")} alt=""/>
            </div>
        </div>;
    }
}
 
export default Header;