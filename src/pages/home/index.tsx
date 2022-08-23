import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Link to={"/store"}>
                <Button type="button" className="btn btn-primary">Go to Store!</Button>
            </Link>
        </div>
    )
}

export default Home;