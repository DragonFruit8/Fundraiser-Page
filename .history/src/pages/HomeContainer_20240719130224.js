
import React, { useState } from 'react';


const HomeContainer = () => {
    const [residentialInfo, setResidentialInfo] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        setResidentialInfo({
            ...residentialInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send residentialInfo to the association for neighbors
        console.log(residentialInfo);
        // Reset the form
        setResidentialInfo({
            address: '',
            city: '',
            state: '',
            zipCode: ''
        });
    };

    return (
        <section className="container">
            <div className="col justify-content-center">
                <div className="row-md-8">
                    <div className="d-flex container row h-50 justify-content-center align-items-center">
                        <div className="col">
                            <h1 className="display-5">Welcome to the Fundraiser Site</h1>
                            <p className="lead">Donate to our cause and help us make the world a better place.</p>
                        </div>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Join our Community of Helpful individuals</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" value={residentialInfo.address} onChange={handleChange} placeholder="Enter your address" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name="city" value={residentialInfo.city} onChange={handleChange} placeholder="Enter your city" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" name="state" value={residentialInfo.state} onChange={handleChange} placeholder="Enter your state" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                    <input type="text" className="form-control" id="zipCode" name="zipCode" value={residentialInfo.zipCode} onChange={handleChange} placeholder="Enter your zip code" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    };


export default HomeContainer;