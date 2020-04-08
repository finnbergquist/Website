import React from 'react';
import { Link } from 'react-router-dom'; 

// style 
import '../styles/about.css';

// image 
import StacyDoore from '../images/meet-the-team/10201229.png'
import EmmeMcCabe from '../images/meet-the-team/18535669.png'


function About() {
    return (
        <div>

            <h1>About</h1>
            <div class="heading-title text-center">
                <h3 class="text-uppercase"> Meet the Team! </h3>
                <p class="half-txt"> Here, you can get to know the CSCI 2345 Project Team. </p>
             </div>
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src={StacyDoore} alt="Stacy Doore"></img>
                    <div class="team-hover">
                        <div class="desk">
                        <h4><Link to='https://www.bowdoin.edu/profiles/faculty/sdoore/index.html' className="link">Prof. Stacy Doore</Link></h4>
                        <p> Spatial cognition and indoor navigation expert, UX/UI, Assistive Technologies, natural language and VR/AR applications </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src={EmmeMcCabe} alt="Emme McCabe"></img>
                    <div class="team-hover">
                        <div class="desk">
                        <h4><Link to='https://www.github.com/emmemccabe' className="link">Emme McCabe '20</Link></h4>
                        <p> Computer Science Major with an interest in the convergence of computing ethics and quantitative trading. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>









        </div>
    );
}

export default About;

