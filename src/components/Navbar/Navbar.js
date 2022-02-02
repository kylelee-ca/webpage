import React from 'react';
import './Navbar.css';



export default class Navbar extends React.Component {
    onClick() {
        const topnav = document.getElementById("topnav");
        if(topnav.className === "navbar") {
            topnav.className += " responsive";
        } else {
            topnav.className = "navbar";
        }
    }
    render() {
        return (
            <div className="navbar" id="topnav">
                <a className="brand" href="#home">Home</a>
                <div className="nav-items">
                    <a className="nav-item" href="#about">About</a>
                    <a className="nav-item" href="#skills">Skills</a>
                    <a className="nav-item" href="#projects">Projects</a>
                    <a className="nav-item" href="#contact">Contact</a>
                </div>
                <a className="hamburger" href="#" onClick={this.onClick}><i className="fas fa-bars"></i></a>
            </div>
        );
    }
}