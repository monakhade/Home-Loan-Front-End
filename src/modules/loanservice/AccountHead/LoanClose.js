import React from 'react'
import axios from 'axios';
import {useState, useEffect } from 'react';

function LoanClose() {
    const [enqdata, setEnquiry] = useState([]);

    function getEnquiryByCibil()
    {
      axios.get('http://localhost:8857/getAllRegEnquiry')
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
<h4>Loan Sanction List</h4>
    <table className='table table-bordered table-primary ' >
     <thead>
       <tr>
       <th>sanctionId</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Contact Number</th>
         <th>EmailId</th>
         <th>AadharCard Number</th>
         <th>Pancard Number</th>
         <th>CIBIL Status</th>
         <th>Loan Status</th>
         <th>sanctionAmount</th>
         <th>loanTenure</th>
         <th>monthlyEMIAmount</th>
         <th>transferedAmount</th>
         <th>paymentStatus</th>
       </tr>
     </thead>
     <tbody>
          {
             enqdata.map((enq,index)=> <tr key={index}>
                 <td>{enq.sanctionLetter.sanctionId}</td>
                <td>{enq.firstName}</td>
                <td>{enq.lastName}</td>
                <td>{enq.contactNumber}</td>
                <td>{enq.emailId}</td>
                <td>{enq.aadharCardNumber}</td>
                <td>{enq.pancardNumber}</td>
                <td>{enq.cibilStatus}</td>
                <td>{enq.loanStatus}</td>
                <td>{enq.sanctionLetter.sanctionAmount}</td>
                <td>{enq.sanctionLetter.loanTenure}</td>
                <td>{enq.sanctionLetter.monthlyEMIAmount}</td>
                <td>{enq.loanDisbursement.transferedAmount}</td>
                <td>{enq.loanDisbursement.paymentStatus}</td>

             </tr>
             )
          }

     </tbody>
   </table>   
 </div>
)
}

export default LoanClose