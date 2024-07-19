import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Admin Page</h1>
            <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Set new goal"
            />
            <button onClick={handleUpdateGoal}>Update Goal</button>
        </div>
    );
};

export default Admin;
