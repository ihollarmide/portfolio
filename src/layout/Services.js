import React from 'react';

const Services = () => (
    <section className="section services has-text-centered">
        <div className="container">
            <div className="columns">
                <div className="column">&nbsp;</div>
                <div className="column is-two-thirds">
                    <div>
                        <span class="tag has-text-white is-small is-size-6 is-link has-text-weight-bold margin-bottom-small">WHAT I DO</span>
                    </div>
                    <h2 className="title">My Services</h2>
                    <p className="services__text margin-bottom-small">These are the services that I offer as a Front End Developer. I make use of HTML, CSS, JavaScript and React JS. These services however, are not exclusive to web technology alone. I also engage in technical writing.</p>
                </div>
                <div className="column">&nbsp;</div>
            </div>
        </div>
        <div className="container">
            <div className="columns">
                <div className="column notification">
                        <div className="has-background-white">
                            <div className="card">
                                <div className="card-content">
                                    <span className="icon margin-bottom-medium">
                                        <i class="fas fa-laptop is-size-2 has-text-link"></i>
                                    </span>
                                    <h3 className="subtitle is-4 has-text-black has-text-weight-medium services__subtitle">Web Development</h3>
                                    <p className="services__text">I design and build beautiful and interactive websites with engaging user experiences.</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="column notification">
                    <div className="has-background-white">
                        <div className="card">
                            <div className="card-content">
                                <span className="icon margin-bottom-medium">
                                    <i class="fas fa-edit is-size-2 has-text-link"></i>
                                </span>
                                <h3 className="subtitle is-4 has-text-black has-text-weight-medium services__subtitle">Technical Writing</h3>
                                <p className="services__text">I write well-researched and in depth articles.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column notification">
                    <div className="has-background-white">
                        <div className="card">
                            <div className="card-content">
                                <span className="icon margin-bottom-medium">
                                    <i class="fas fa-tools is-size-2 has-text-link"></i>
                                </span>
                                <h3 className="subtitle is-4 has-text-black has-text-weight-medium services__subtitle">PC Repairs</h3>
                                <p className="services__text">I am capable of repairing and fixing software faults on both mobile and PCs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Services;