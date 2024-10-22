import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import EMI from '../emi/EMI'
import { Link } from 'react-router-dom';

function CalculateEMI() 
{
    const [enqdata, setEMI] = useState([]);
    const [showForm, setShowForm] = useState(false); 

    function getEMI()
    {
      axios.get('http://localhost:8855/getAllByLoanStatus/DocAccepted')
        .then(res=>{
          if(res.status===200)
            {
               setEMI(res.data)
            }
        })
        .catch(error=>('Something went wrong....!'))
    }
    useEffect(()=>getEMI(),[])
  
  
    return (

      <div>           
      {showForm ? (
                <EMI/>  // Show the EMI form
            ) : (
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
                      { <Link to={`/dashboard/check/${enq.customerEnquiryId}`}>
                       EMICheck
                    </Link> }
                    {/* <button  onClick={()=>Calculator(enq.customerEnquiryId)}> */}
                   {/* </button> */}
                      </td>
                  </tr>
                  )
               }
  
          </tbody>
        </table>   
      </div>
    )}
    </div>

    );
}

export default CalculateEMI

