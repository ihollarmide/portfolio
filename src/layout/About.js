import React from 'react';
import Developer from '../assets/images/developer.svg'
const About = () => (
    <section className="section about">
        <div className="container">
            <div className="columns is-8">
                <div className="column">
                    <div className="container">
                        <figure class="image">
                            <img src={Developer} alt="Web Developer"/>
                        </figure>
                    </div>
                </div>
                <div className="column about__column">
                    <h1 className="title about__title margin-bottom-large has-text-weight-bold has-text-left is-5 after">About Me</h1>
                    <h2 className="subtitle about__subtitle margin-bottom-small has-text-weight-bold has-text-left has-text-link is-5">I am a Front-End developer with just 10 months experience.</h2>
                    <p className="about__text has-text-weight-medium has-text-justified margin-bottom-medium">Yes, You read that right- 10 months. I am still actively learning. Well, Learning itself never ends. However, Being a beginner has not stopped me from taking on challenging tasks. I am highly resourceful and ever ready to learn new things as long as it will add value to me. I also possess the needed soft skills needed for fruitful collaboration with others and would be a great addition to your team and together, We can build great applications. I love the web and the technologies it entails.</p>
                    <div className="columns">
                        <div className="column">
                            <div className="level has-text-weight-bold">
                                <div className="level-left">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                        <span>Location: Lagos, Nigeria</span>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i className="far fa-calendar-alt"></i>
                                        </span>
                                        <span>Age: 22</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="level has-text-weight-bold">
                                <div className="level-left">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i class="fas fa-phone-alt"></i>
                                        </span>
                                        <span>Phone: +2348106462066</span>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <span className="icon">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                        <span>Email: olamideganiyuidris@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default About;