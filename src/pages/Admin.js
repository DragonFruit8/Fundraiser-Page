import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdminContainer = styled.div`
  text-align: center;
`;

const Admin = () => {
    const [goal, setGoal] = useState('');

    const handleUpdateGoal = async () => {
        try {
            await axios.post('/api/update-goal', { goal });
            alert('Goal updated successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to update goal.');
        }
    };

    return (
        <AdminContainer className="container">
            <h1>Admin Page</h1>
            <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Set new goal"
            />
            <button onClick={handleUpdateGoal}>Update Goal</button>
        </AdminContainer>
    );
};

export default Admin;
