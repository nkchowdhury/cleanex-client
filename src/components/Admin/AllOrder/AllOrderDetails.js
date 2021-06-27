import React from 'react';

const AllOrderDetails = ({aol}) => {


    return (
        <table>
     
     
      <tr>
     
      <td>{aol.tittle}</td>
      <td>{aol.date}</td>
      <td>{aol.email}</td>
      <td>panding</td>
      </tr>





     </table>
    );
};

export default AllOrderDetails;