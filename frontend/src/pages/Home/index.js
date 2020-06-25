import React from 'react';

import { Banner } from '../../components/Banner';
import { About } from '../../components/About';
import { Schedule } from '../../components/Schedule';
import { Footer } from '../../components/Footer';

import './styles.css';

export default function Home() {

    return (
        <div className="home">
            <div className="home-container">
                <Banner />
                <About />
                <section className="feedbacks" />
                <Schedule />
            </div>
            <Footer />
        </div>
    );
}