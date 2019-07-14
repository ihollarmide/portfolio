import React from 'react';
import Nexter from '../assets/images/nexter-page.jpg';
import Trillo from '../assets/images/trillo-page.jpg';
import Natours from '../assets/images/natours-page.jpg';

const Work = () => (
    <div>
    <section className="parallax-bg section">
        <div className="container">
            <h3 className="title has-text-centered is-1 has-text-white has-text-weight-bolded">Love what you see? Contact me.</h3>
        </div>
    </section>
    <section className="section services has-text-centered">
        <div className="container">
            <div className="columns">
                <div className="column">&nbsp;</div>
                <div className="column is-two-thirds">
                    <div>
                        <span class="tag has-text-white is-small is-size-6 is-link has-text-weight-bold margin-bottom-small">WORKS</span>
                    </div>
                    <h2 className="title">My Works</h2>
                    <p className="services__text margin-bottom-small">These are some of the projects that I have done.</p>
                </div>
                <div className="column">&nbsp;</div>
            </div>
        </div>
        <div className="container">
            <div className="columns">
                <div className="column notification">
                    <div className="has-background-white">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src={Natours} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media-content">
                                    <p class="title is-4 has-text-link margin-bottom-medium">Natours Landing Page</p>
                                    <p class="subtitle is-6 has-text-weight-semibold margin-bottom-small"><a href="https://ihollarmide.github.io/Natours/">Click to visit</a></p>
                                </div>
                                <div class="content has-text-weight-medium has-text-left">
                                <p>Exciting Tours for Adventurous people looking to have fun in wonderful locations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column notification">
                    <div className="has-background-white">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src={Nexter} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media-content">
                                    <p class="title is-4 has-text-link margin-bottom-medium">Nexter</p>
                                    <p class="subtitle is-6 has-text-weight-semibold margin-bottom-small"><a href="https://ihollarmide.github.io/Nexter/">Click to visit</a></p>
                                </div>
                                <div class="content has-text-weight-medium has-text-left">
                                <p>A Website where Realtors advertise and sell houses to willing buyers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column notification">
                    <div className="has-background-white">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src={Trillo} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media-content">
                                    <p class="title is-4 has-text-link margin-bottom-medium">Trillo</p>
                                    <p class="subtitle is-6 has-text-weight-semibold margin-bottom-small"><a href="https://ihollarmide.github.io/Trillo/">Click to visit</a></p>
                                </div>
                                <div class="content has-text-weight-medium has-text-left">
                                <p>An Airline and Hotel Booking Page all in one place for travellers around the world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
)
export default Work;