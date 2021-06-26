import React from 'react';

const YourOrder = ({or}) => {
    return (
        <div style={{border:"1px solid #357e98", padding:"10px", margin:"5px"}} className="col-md-4">

           <h4>{or.tittle}</h4>
           <h5>{or.date}</h5>
           <p>{or.description}</p>
           <p>Price:${or.price}</p>
           <p>Payment Status: Done</p>
           <h5 style={{ color: "#357e98" }}>Status: Panding</h5>
            
        </div>
    );
};

export default YourOrder;