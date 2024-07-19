import React from 'react';

const Home = () => {
return (
    <section className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="text-center">
                    <h1 className="display-4">Welcome to the Fundraiser Site</h1>
                    <p className="lead">Donate to our cause and help us make the world a better place.</p>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Make a Donation</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input type="number" className="form-control" id="amount" placeholder="Enter donation amount" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Donate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Home;
