import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    text-align: center;

    .timeline:before {
        content: "";
        background: var(--bs-secondary);
        width: 5px;
        height: 95%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-item:nth-child(even) .timeline-content {
        float: right;
        padding: 40px 30px 10px 30px;
    }

    .timeline-item:nth-child(even) .timeline-content .date {
        right: auto;
        left: 0;
    }

    .timeline-item:nth-child(even) .timeline-content::after {
        content: "";
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent var(--bs-light) transparent transparent;
    }

    .timeline-item::after {
        content: "";
        display: block;
        clear: both;
    }

    .timeline-content {
        position: relative;
        width: 45%;
        padding: 10px 30px;
        border-radius: 4px;
        background: var(--bs-light);
    }

    .timeline-content::after {
        content: "";
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        right: -15px;
        border-width: 10px 0 10px 15px;
        border-color: transparent transparent transparent var(--bs-light);
    }

    .timeline-img {
        width: 30px;
        height: 30px;
        background: var(--bs-secondary);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-top: 25px;
        margin-left: -15px;
    }

    @media screen and (max-width: 768px) {
        .timeline::before {
            left: 50px;
        }

        .timeline .timeline-img {
            left: 50px;
        }

        .timeline .timeline-content {
            max-width: 100%;
            width: auto;
            margin-left: 70px;
        }

        .timeline .timeline-item:nth-child(even) .timeline-content {
            float: none;
        }

        .timeline .timeline-item:nth-child(odd) .timeline-content::after {
            content: "";
            position: absolute;
            border-style: solid;
            width: 0;
            height: 0;
            top: 30px;
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: transparent #f5f5f5 transparent transparent;
        }
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <div className="container col h-100 justify-content-center align-items-center">
                <h1 className="text-center">About Our Organization</h1>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <p>Welcome to our organization's about page!</p>
                        <p>We are dedicated to making a positive impact in our community.</p>
                        <p>
                            Through our fundraising efforts, we aim to support various causes and initiatives that align with our
                            mission.
                        </p>
                        <p>Join us in making a difference!</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-start" style={{ textAlign: 'center' }}>
                        <h2>Our Mission</h2>
                        <p>Our mission is to make the world a better place by supporting causes that matter.</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="container py-5 timeline position-relative">
                        <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <p className="lead">Step Date</p>
                                <h2 className="fw-bold rfs-12">Step Name</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus,
                                        lobortis non augue at, placerat viverra risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <p className="lead">Step Date</p>
                                <h2 className="fw-bold rfs-12">Step Name</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus,
                                        lobortis non augue at, placerat viverra risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <p className="lead">Step Date</p>
                                <h2 className="fw-bold rfs-12">Step Name</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus,
                                        lobortis non augue at, placerat viverra risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div className="timeline-img"></div>
                            <div className="timeline-content">
                                <p className="lead">Step Date</p>
                                <h2 className="fw-bold rfs-12">Step Name</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus,
                                        lobortis non augue at, placerat viverra risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AboutContainer>
    );
};

export default About;
