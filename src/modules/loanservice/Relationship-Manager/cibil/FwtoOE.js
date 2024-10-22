import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function FwdToOE()
{
    const [enqdata, setEnquiry] = useState([]);
    const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm();

    function getdata()
    {
      axios.get('http://localhost:8855/getAllByCibilStatus/Pending')
        .then(res=>{
          if(res.status===200)
            {
               setEnquiry(res.data)
            }
        })
        .catch(error=>('Something went wrong....!'))
    }
    useEffect(()=>getdata(),[]);

    const {customerEnquiryId} = useParams();
    function getEditData()
    {
       axios.get(`http://localhost:8855/fwdToOE/${customerEnquiryId}`)
        .then(
           (response=>{
             
             for(let prop in response.data)
             {
               setValue(prop, response.data[prop])
             }
           })
        )
        .catch(
           errors=>console.log(errors)
        )
  
    }
     useEffect(()=>{
                    if(customerEnquiryId!==undefined){
                    getEditData()
                       }             
                    },[])
  
  
    return (
      <div>
         <table className='table table-bordered table-dark'>
          <thead>
            <tr>
              <th>Customer Enquiry Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>EmailId</th>
              <th>AadharCard Number</th>
              <th>Pancard Number</th>
              <th>CIBIL Status</th>
              <th>Loan Status</th>
              <th></th>
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
                     <td>{enq.cibilStatus}</td>
                     <td>{enq.loanStatus}</td>
                     <td>
                        <button className='btn text-danger' onClick={()=>getEditData(enq.customerEnquiryId)}>
                         FwdToOE
                        </button>
                     </td>
                  </tr>
                  )
               }
  
          </tbody>
        </table>   
      </div>
    )

}

export default FwdToOE
