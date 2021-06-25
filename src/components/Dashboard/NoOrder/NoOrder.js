import React from 'react';
import { Link } from 'react-router-dom';

const NoOrder = () => {
    return (
        <div className="container d-flex justify-content-center mt-5">
        <h4>Please <Link to='/'>click here</Link> to order from home page </h4>
      </div>
    );
};

export default NoOrder;