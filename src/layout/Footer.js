import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="level has-text-weight-bold">
                <div className="level-left">
                    <div className="level-item">
                        <p className="footer__copyright has-text-white has-text-weight-light">Copyright &copy; 2019. Idris Ganiyu. All Rights reserved.</p>
                    </div>
                </div>
                    <div className="level-right">
                        <div className="level-item footer__icons">
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
            </div>
        </div>
    </footer>
)

export default Footer;