import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


import './styles.css';

import BannerTexts from '../ui/BannerTexts';
import NavBar from '../ui/NavBar';
import logoImg from '../../assets/logo.svg';
import bannerImg from '../../assets/banner.png';

export default function Home() {

    return (
        <div className="home-container">
            <img className="bannerImage" src={bannerImg} alt="" />
            <div className="header">
                <img className="logo" src={logoImg} alt="" />
                <NavBar className="nav" />
            </div>
            <BannerTexts />
            
        </div>
    );
}