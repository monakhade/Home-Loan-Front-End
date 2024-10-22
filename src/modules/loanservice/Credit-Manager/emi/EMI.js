import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Calculator() 
{

    const{register,handleSubmit,reset,setValue,formState:{errors}} = useForm();

    const {customerEnquiryId}   =useParams();
    const navigate  = useNavigate();
  
    const getEditData=()=>{
      if(customerEnquiryId!==undefined){
          axios.get(`http://localhost:8855/getById/${customerEnquiryId}`)
          .then(response=>{
             for(let prop in response.data)
             {
              setValue(prop,response.data[prop])
             }
          })
      }
  }

  useEffect(()=>{
    if(customerEnquiryId!==undefined){
       getEditData()
    }

 },[])

    const calculateEMI = (emi) =>
       {
        if(customerEnquiryId===undefined)
        {
            axios.put(`http://localhost:8858/calculateEMI`,emi)
            .then(res=>{
                  if(res.status===201)
                  {
                     alert('EMI Calculated...!')
                    console.log(customerEnquiryId)
                    navigate("/emi-check")
                  }
            })
            .catch(error=>
                    console.log(error));
          }
       } 

    
       return (
        <div className='calculator'>
          <div className='form'>
            <h1>Loan Calculator</h1>
            
            <form onSubmit={handleSubmit(calculateEMI)}>
              {/* ternary operator manages when the calculator and results will be displayed to the user */}
              {/* {!results.isResult ? ( */}
                {/* //   Form to collect data from the user */}
                <div className='form-items'>
                  <div>
                    <label id='label' htmlFor='loanAmount'>Amount:</label>
                    <input type='number' name='amount' placeholder='Loan amount' {...register('sanctionAmount')}/>
                  </div> &nbsp;
                  <div>
                    <label id='label' htmlFor='InterestRate'>Interest:</label>
                    <input type='number'  name='interest' placeholder='Interest' {...register('rateofInterest')} />
                  </div> &nbsp;
                  <div>
                    <label id='label' htmlFor='Tenure'>Years:</label>
                    <input type='number' name='years' placeholder='Years to repay' {...register('loanTenure')}/>
                  </div> &nbsp; <br/>
                  <input type='submit' className='button' />
                </div>

       
                
            {/* : 
            (
            //     //   Form to display the results to the user
            //     <div className='form-items'>
            //       <h4>
            //         Loan amount: ${sanctionAmount} <br /> Interest:{' '}
            //         {rateofInterest}% <br /> Years to repay: {loanTenure}
            //       </h4>
            //       <div>
            //         <label id='label'>Monthly Payment:</label>
            //         <input type='text' value={results.monthlyEMIAmount} disabled />
            //       </div>
            //       <div>
            //         <label id='label'>Total Payment: </label>
            //         <input type='text' value={results.totalPayment} disabled />
            //       </div>
            //       <div>
            //         <label id='label'>Total Interest:</label>
            //         <input type='text' value={results.totalInterest} disabled />
            //       </div>
            //       {/* Button to clear fields */}
            {/* //       <input className='button' value='Calculate again' type='button' />
            //     </div>
            //   )} */} 
            </form>
          </div>
        </div>
      );

}

export default Calculator;