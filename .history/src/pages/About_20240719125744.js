import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
`;
const AboutContainer = () => {
    return (
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
        </div>
    );
};

export default AboutContainer;
