import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
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
                    <p>Through our fundraising efforts, we aim to support various causes and initiatives that align with our mission.</p>
                    <p>Join us in making a difference!</p>
                </div>

            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6" style={{ textAlign: 'center' }}>
                    <h2>Our Mission</h2>
                    <p>Our mission is to make the world a better place by supporting causes that matter.</p>
                </div>
                </div>
                <div className="row justify-content-center align-items-center">


                    <div class="container py-5 timeline position-relative">
                       
                        <div class="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div class="timeline-img"></div>
                            <div class="timeline-content">
                                <p editable="inline" class="lead">Step Date</p>
                                <h2 editable="inline" class="fw-bold rfs-12">Step Name</h2>
                                <div editable="rich">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div class="timeline-img"></div>
                            <div class="timeline-content">
                                <p editable="inline" class="lead">Step Date</p>
                                <h2 editable="inline" class="fw-bold rfs-12">Step Name</h2>
                                <div editable="rich">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div class="timeline-img"></div>
                            <div class="timeline-content">
                                <p editable="inline" class="lead">Step Date</p>
                                <h2 editable="inline" class="fw-bold rfs-12">Step Name</h2>
                                <div editable="rich">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item w-100 mb-4 py-4 text-dark lc-block">
                            <div class="timeline-img"></div>
                            <div class="timeline-content">
                                <p editable="inline" class="lead">Step Date</p>
                                <h2 editable="inline" class="fw-bold rfs-12">Step Name</h2>
                                <div editable="rich">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </AboutContainer>
    );
};

export default About;
