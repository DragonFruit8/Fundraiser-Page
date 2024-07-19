import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Donate</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleDonate}>Donate</button>
        </div>
    );
};

export default Donate;
