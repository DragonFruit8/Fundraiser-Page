import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DonateContainer = styled.div`
  text-align: center;
`;

const Donate = () => {
    const [amount, setAmount] = useState('');

    const handleDonate = async () => {
        try {
            await axios.post('/api/donate', { amount });
            alert('Donation successful!');
            setAmount('');
        } catch (error) {
            console.error(error);
            alert('Donation failed!');
        }
    };

    return (
        <DonateContainer className="container">
            <h1>Donate</h1>
            {/* <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />*/}
            <button onClick={handleDonate}>Donate</button> 

            <div className="container-fluid p-0 overflow-hidden">
                <div className="row flex-lg-row-reverse g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="lc-block">
                            <img className="w-100" src="https://images.unsplash.com/photo-1428550590922-34c77f716ad4?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDB8fHwxNzAzMDc0MzIzfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=768" srcset="" sizes="" width="" height="" alt="Photo by Jeremy Ricketts" loading="lazy"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lc-block p-3">
                            <div editable="rich">
                                <h1>Your Title goes here</h1>
                                <p className="lead">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="lc-block">
                            <img className="w-100" alt='beach' src="https://images.unsplash.com/photo-1523572989266-8239d24ebb68?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=M3wzNzg0fDB8MXxzZWFyY2h8M3x8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDB8fHwxNzAzMDc0MzIzfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&amp;h=768" srcset="" sizes="" width="" height="" alt="Photo by Photographer Frederik Trovatten" loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lc-block p-3">
                            <div editable="rich">
                                <h1>Your Title goes here</h1>
                                <p className="lead">Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type. Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
                                <button className="btn btn-secondary">Donate Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DonateContainer>
    );
};

export default Donate;
