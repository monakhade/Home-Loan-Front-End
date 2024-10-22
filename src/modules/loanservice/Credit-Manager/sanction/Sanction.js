import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sanction() 
{
    const [enqdata, setSanction] = useState([]);

    function getSanction()
    {
      axios.get('http://localhost:8855/getAllByLoanStatus/DocAccepted')
        .then(res=>{
          if(res.status===200)
            {
               setSanction(res.data)
            }
        })
        .catch(error=>('Something went wrong....!'))
    }
    useEffect(()=>getSanction(),[])
  
  
    return (
      <div>
         <table className='table table-bordered table-dark'>
          <thead>
            <tr>
              <th>Customer Reg Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>EmailId</th>
              <th>AadharCard Number</th>
              <th>Pancard Number</th>
              <th>Loan Status</th>
              <th></th>
              
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
                     <td>{enq.loanStatus}</td>
                     <td>
                     <Link className='text-info' to={`/dashboard/getsanction/${enq.customerEnquiryId}`}>
                      Generate Sanction
                      </Link>
                     </td>
                  </tr>
                  )
               }
  
          </tbody>
        </table>   
      </div>
    )
}

export default Sanction
