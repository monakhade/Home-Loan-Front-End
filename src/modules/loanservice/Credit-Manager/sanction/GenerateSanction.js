import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function GenerateSanction() {

  const{register,handleSubmit,reset,setValue,formState:{errors}} = useForm();
  const {CustomerRegId}   =useParams();
  const navigate  = useNavigate();

  const saveSanction = (sandata) =>
   {
    if(CustomerRegId===undefined)
      {
          axios.put('http://localhost:8858//generateSanction/{CustomerRegId}',sandata)
          .then(res=>{
                if(res.status===201)
                {
                   alert('Enquiry details saved...!')
                   navigate('/sanction')
                }
          })
          .catch(error=>
                  console.log(error));
        }
     } 

     const getEditData=()=>{
      if(CustomerRegId!==undefined){
          axios.get(`http://localhost:8855/getByCustomerRegId/${CustomerRegId}`)
          .then(response=>{
             for(let prop in response.data)
             {
              setValue(prop,response.data[prop])
             }
          })
      }
  }
  useEffect(()=>{
    if(CustomerRegId!==undefined){
       getEditData()
    }
 },[])

  return (
    <div>
          <div className='form'>
            <h1>Generate Sanction</h1>
            
            <form onSubmit={handleSubmit(saveSanction)}>
         
                <div className='form-items'>
                <div>
                    <label id='label'>Sanction Id: </label>
                    <input type='text' placeholder='sanction Id' {...register('sanctionId')}/>
                  </div> &nbsp;
                  <div>
                    <label id='label'>APPlicant Name: </label>
                    <input type='text' placeholder='applicantName' {...register('applicantName')}/>
                  </div> &nbsp;
                  <div>
                    <label id='label'>Sanction Amount: </label>
                    <input type='text' placeholder='sanction Amount' {...register('sanctionAmount')} />
                  </div> &nbsp;
                  <div>
                    <label id='label'>Interest Rate: </label>
                    <input type='text' placeholder='Interest rate' {...register('rateofInterest')}/>
                  </div> &nbsp; 
                  <div>
                    <label id='label'> Loan Tenure: </label>
                    <input type='text' placeholder='Years to repay' {...register('loanTenure')}/>
                  </div> &nbsp;
                  <div>
                    <label id='label' hidden>Monthly EMI Amount: </label>
                    <input type='text' placeholder='Monthly EMI' {...register('monthlyEMIAmount')} hidden/>
                  </div> &nbsp;<br/>
                  <input type='submit' className='button' />
                </div>

            </form>
          </div>

    </div>
  )
}

export default GenerateSanction
