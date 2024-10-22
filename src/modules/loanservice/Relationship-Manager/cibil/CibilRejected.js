import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react';

function CibilRejected() {

    const [enqdata, setEnquiry] = useState([]);

    function getEnquiryByCibil()
    {
      axios.get('http://localhost:8855/getAllByCibilStatus/Poor')
        .then(res=>{
          if(res.status===200)
            {
               setEnquiry(res.data)
            }
        })
        .catch(error=>('Something went wrong....!'))
    }
    useEffect(()=>getEnquiryByCibil(),[])
  
  
    return (
      <div>
         <table className='table table-bordered table-dark'>
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>EmailId</th>
              <th>AadharCard Number</th>
              <th>Pancard Number</th>
              <th>CIBIL Status</th>
              <th>Loan Status</th>
              <th>Send Email</th>
            </tr>
          </thead>
          <tbody>
               {
                  enqdata.map((enq,index)=> <tr key={index}>
                     <td>{enq.customerEnquiryId}</td>
                     <td>{enq.firstName}</td>
                     <td>{enq.lastName}</td>
                     <td>{enq.contactNumber}</td>
                     <td>{enq.emailId}</td>
                     <td>{enq.aadharCardNumber}</td>
                     <td>{enq.pancardNumber}</td>
                     <td>{enq.cibilStatus}</td>
                     <td>{enq.loanStatus}</td>
                  </tr>
                  )
               }
  
          </tbody>
        </table>   
      </div>
    )
 
}

export default CibilRejected;
