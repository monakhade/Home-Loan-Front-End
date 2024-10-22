import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Enquiry() 
{
    const{register,handleSubmit,reset,setValue,formState:{errors}} = useForm();



  const saveEnquiry = (enquiry) =>
  {
    {
     axios.post('http://localhost:8855/saveEnquiryDetails',enquiry)
     .then(res=>{
           if(res.status===201)
           {
              alert('Enquiry details saved...!')
           }
     })
     .catch(error=>
             console.log(error));
   }

 } 

 const clearForm = ()=>reset();

  return (
    <div>
<section>
  <div>
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
          <div className='enq'>
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Enquiry Here</h3>
            <form onSubmit={handleSubmit(saveEnquiry)}>

              <div className="row">
              <div className="col-md-6 mb-4">

              <div data-mdb-input-init className="form-outline">

             <input type="text" className="form-control form-control-lg" {...register('customerEnquiryId')} />
             <label className="form-label" htmlFor="firstName">Customer Id </label>
               </div>

             </div>
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                 
                    <input type="text" className="form-control form-control-lg" {...register('firstName')} />
                    <label className="form-label" htmlFor="firstName">First Name</label>
                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                    <input type="text" className="form-control form-control-lg" {...register('lastName')} />
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div data-mdb-input-init className="form-outline datepicker w-100">
                    <input type="text" className="form-control form-control-lg" {...register('age')} />
                    <label htmlFor="age" className="form-label">Age</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="femaleGender" {...register('gender')} value="Female" defaultChecked />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="maleGender" {...register('gender')} value="Male" />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="otherGender" {...register('gender')} value="Other" />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
  
                </div>
              </div>

              <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init className="form-outline">
                  <input type="tel" className="form-control form-control-lg" {...register('contactNumber')} />
                  <label className="form-label" htmlFor="contactNumber">Contact Number</label>
                </div>
              </div>

              <div className="col-md-6 mb-4 pb-2">
                  <div data-mdb-input-init className="form-outline">
                    <input type="email" className="form-control form-control-lg" {...register('emailId')} />
                    <label className="form-label" htmlFor="emailId">Email Id</label>
                  </div>
                </div>
                
              </div>

              <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init className="form-outline">
                  <input type="tel" className="form-control form-control-lg" {...register('aadharCardNumber')} />
                  <label className="form-label" htmlFor="adharCardNumber">AdharCard Number</label>
                </div>
              </div>

              <div className="col-md-6 mb-4 pb-2">
                <div data-mdb-input-init className="form-outline">
                  <input type="tel" className="form-control form-control-lg" {...register('pancardNumber')} />
                  <label className="form-label" htmlFor="pancardNumber">PanCard Number</label>
                </div>
              </div>
          </div>      
              
          <div className="row">
              <div className="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg" {...register('address')} />
                  <label className="form-label" htmlFor="address">Address</label>
                </div>
                </div>

              <div className="col-md-6 mb-4 pb-2">
               <div data-mdb-input-init className="form-outline datepicker w-100">
                 <input type="hidden" className="form-control form-control-lg" {...register('cibilScore')} />
                 <label hidden htmlFor="cibilScore" className="form-label">CibilScore</label>
               </div>
            </div>  
          </div>

          <div className="row">
              <div className="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init className="form-outline mb-4">
                  <input type="hidden" value={"Pending"} className="form-control form-control-lg" {...register('cibilStatus')} />
                  <label hidden className="form-label" htmlFor="cibilStatus">CibilStatus</label>
                </div>
                </div>

              <div className="col-md-6 mb-4 pb-2">
               <div data-mdb-input-init className="form-outline datepicker w-100">
                 <input type="hidden" value={"Pending"} className="form-control form-control-lg" {...register('loanStatus')} />
                 <label hidden htmlFor="loanStatus" className="form-label">LoanStatus</label>
               </div>
            </div>  
          </div>

              <div className="mt-4 pt-2">
                <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" /> &nbsp;
                  <button type="button" className="btn btn-primary btn-lg" onClick={clearForm}>Reset</button> 
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</div>
  )
}

export default Enquiry