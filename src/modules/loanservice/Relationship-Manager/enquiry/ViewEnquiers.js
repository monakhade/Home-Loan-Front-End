import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function ViewEnquiers()
{
  const [enqdata, setEnquiry] = useState([]);

  function getEnquiry()
  {
    axios.get('http://localhost:8855/getAllEnquiry')
      .then(res=>{
        if(res.status===200)
          {
             setEnquiry(res.data)
          }
      })
      .catch(error=>('Something went wrong....!'))
  }
  useEffect(()=>getEnquiry(),[])


  return (
    <div>
       <table className='table table-bordered table-dark'>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact Number</th>
            <th>EmailId</th>
            <th>AadharCard Number</th>
            <th>Pancard Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
             {
                enqdata.map((enq,index)=> <tr key={index}>
                   <td>{enq.customerEnquiryId}</td>
                   <td>{enq.firstName}</td>
                   <td>{enq.lastName}</td>
                   <td>{enq.age}</td>
                   <td>{enq.gender}</td>
                   <td>{enq.contactNumber}</td>
                   <td>{enq.emailId}</td>
                   <td>{enq.aadharCardNumber}</td>
                   <td>{enq.pancardNumber}</td>
                   <td>{enq.address}</td>
                 
                </tr>
                )
             }

        </tbody>
      </table>   
    </div>
  )
}

export default ViewEnquiers