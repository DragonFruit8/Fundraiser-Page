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
        } catch (error) {
            console.error(error);
            alert('Donation failed!');
        }
    };

    return (
        <DonateContainer className="container">
            <h1>Donate</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleDonate}>Donate</button>
        </DonateContainer>
    );
};

export default Donate;
