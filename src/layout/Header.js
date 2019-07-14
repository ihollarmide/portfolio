 import React from 'react';

 const Header = () => (
     <header className="hero header">
        <div className="hero-body  center-vertical">
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds">
                        <div className="margin-bottom-medium">
                            <span class="tag has-text-link is-medium is-size-5 is-white has-text-weight-bold">Hello !</span>
                        </div>
                        <h1 className="title header__title is-size-1 has-text-white margin-bottom-medium">
                            <span className="has-text-weight-bold">I Am</span><span className="has-text-weight-light"> A Front End Web Developer</span> 
                        </h1>
                        <h2 className="subtitle header__subtitle is-size-6 has-text-white margin-bottom-medium">
                        I am Idris Olamide, a front-end developer that creates beautiful websites with engaging user experiences. I write HTML, CSS , JavaScript and React JS.
                        </h2>
                        <div className="header__social-icons">
                            <a href="https://www.github.com/ihollarmide">
                                <span className="icon">
                                    <i className="fab fa-github has-text-white fa-border icon-item"></i>
                                </span>
                            </a>
                            <a href="https://www.twitter.com/i_hollarmide">
                                <span className="icon">
                                    <i className="fab fa-twitter has-text-white fa-border icon-item"></i>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/idrisganiyu">
                                <span className="icon">
                                    <i className="fab fa-linkedin has-text-white fa-border icon-item"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </div>
    </header>
 )


export default Header;
