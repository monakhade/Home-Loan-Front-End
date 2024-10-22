import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../../../style/register.css';
import { useParams } from 'react-router-dom';

const Register= () => {
  const {register,handleSubmit,customerEnquiryId, setValue,formState: { errors }} = useForm();
  const [step, setStep] = useState(1);

  const cuid = useParams(customerEnquiryId)
  console.log(cuid.customerEnquiryId)

  const onSubmit = (data) => {
    console.log(data);
    const customerEnquiryId=data.customerEnquiryId;
    saveRegData(data,customerEnquiryId);
  };

  const getEditData=()=>{
    if(cuid!==undefined){
        axios.get(`http://localhost:8855/getById/${cuid.customerEnquiryId}`)
        .then(response=>{
           for(let prop in response.data)
           {
            setValue(prop,response.data[prop])
           }
        })
    }
}
useEffect(getEditData,[])

  const saveRegData = (regdata) => {
    axios
      .post(`http://localhost:8855/saveCustRegForm/${cuid.customerEnquiryId}`, regdata)
      .then((res) => {
        if (res.status === 201) {
          alert('Registration details saved...');
        }
      })
      .catch((error) => alert('Something went wrong...'));
  };
const renderPersonalDetails = () => (
    <div>
      <h3>Personal Details</h3>
      <div className="row">
        <div className="column">
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Date of Birth</label>
          <input type="date" {...register('dateOfBirth', { required: true })} />
          {errors.dateOfBirth && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Gender</label>
          <select {...register('gender', { required: true })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Contact Number</label>
          <input {...register('contactNo', { required: true })} />
          {errors.contactNo && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Email ID</label>
          <input {...register('emailId', { required: true })} />
          {errors.emailId && <span>This field is required</span>}
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label>Password</label>
          <input {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Marital Status</label>
          <input {...register('maritalStatus', { required: true })} />
          {errors.maritalStatus && <span>This field is required</span>}
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label>Adhar No</label>
          <input {...register('aadharCardNumber', { required: true })} />
          {errors.aadharCardNumber && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Pan No</label>
          <input  {...register('pancardNumber', { required: true })} />
          {errors.pancardNumber && <span>This field is required</span>}
        </div>
      </div>


     
      <input type="hidden" {...register('cibilScore')}  />
      <input type="hidden" {...register('cibilStatus')} />
      <input type="hidden" {...register('date')} value={new Date().toISOString().split('T')[0]} />
      <input type="hidden" {...register('time')} value={new Date().toLocaleTimeString()} />

    </div> 
  );
  const renderAddressDetails = () => (
    <div>
      <h3>Address Details</h3>
      <div className="row">
        <div className="column">
          <label>Area Name</label>
          <input {...register('areaName', { required: true })} />
          {errors.areaName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>City</label>
          <input {...register('city', { required: true })} />
          {errors.city && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Pincode</label>
          <input {...register('pincode', { required: true })} />
          {errors.pincode && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>State</label>
          <input {...register('state', { required: true })} />
          {errors.state && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
const renderEmploymentDetails = () => (
    <div>
      <h3>Employment Details</h3>
      <div className="row">
        <div className="column">
          <label>Employment Type</label>
          <input {...register('employmentType', { required: true })} />
          {errors.employmentType && <span>This field is required</span>}
          </div>
        <div className="column">
          <label>Monthly Income</label>
          <input {...register('monthlyIncome', { required: true })} />
          {errors.monthlyIncome && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Designation</label>
          <input {...register('designation', { required: true })} />
          {errors.designation && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
  const renderBankDetails = () => (
    <div>
      <h3>Bank Details</h3>
      <div className="row">
        <div className="column">
          <label>Bank Account No</label>
          <input {...register('bankAccountNo', { required: true })} />
          {errors.bankAccountNo && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Pincode</label>
          <input {...register('pincode', { required: true })} />
          {errors.pincode && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Account Type</label>
          <input {...register('accountType', { required: true })} />
          {errors.accountType && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Branch Name</label>
          <input {...register('branchName', { required: true })} />
          {errors.branchName && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Branch Address</label>
          <input {...register('branchAddress', { required: true })} />
          {errors.branchAddress && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>IFSC Code</label>
          <input {...register('ifscCode', { required: true })} />
          {errors.ifscCode && <span>This field is required</span>}
        </div>
        </div>
        <div className='row'>
        <div className="column">
          <label>MICR Code</label>
          <input {...register('micrCode', { required: true })} />
          {errors.micrCode && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );

  const renderPropertyDetails = () => (
    <div>
      <h3>Property Details</h3>
      <div className="row">
        <div className="column">
          <label>Propert Location</label>
          <input {...register('propertLocation', { required: true })} />
          {errors.propertLocation && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Property Type</label>
          <input {...register('propertyType', { required: true })} />
          {errors.propertyType && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Property Cost </label>
          <input {...register('propertyCost', { required: true })} />
          {errors.propertyCost && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
  const renderGuarantorDetails= () => (
    <div>
      <h3>Gurantor Details</h3>
      <div className="row">
        <div className="column">
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Date-Of-Birth</label>
          <input type='date'{...register('dateOfBirth', { required: true })} />
          {errors.dateOfBirth && <span>This field is required</span>}
        </div>
     
        <div className="column">
          <label>Age</label>
          <input {...register('age', { required: true })} />
          {errors.age && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Contact No</label>
          <input {...register('contactNo', { required: true })} />
          {errors.contactNo && <span>This field is required</span>}
        </div>
      
        <div className="column">
          <label>AdharNo</label>
          <input {...register('aadharCardNo', { required: true })} />
          {errors.aadharCardNo && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>PanNo</label>
          <input {...register('panCardNo', { required: true })} />
          {errors.panCardNo && <span>This field is required</span>}
        </div>
      <div className="column">
          <label>Address</label>
          <input {...register('address', { required: true })} />
          {errors.address && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>EmailId</label>
          <input {...register('emailId', { required: true })} />
          {errors.emailId && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Relation</label>
          <input {...register('relationshipToCustomer', { required: true })} />
          {errors.relationshipToCustomer && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
  const renderDocumentDetails = () => (
    <div>
      <h3>Document Details</h3>
      <div className="row">
        <div className="column">
          <label>Photo</label>
          <input type='file'{...register('photo', { required: true })} />
          {errors.photo && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>AadharCard</label>
          <input type='file'{...register('aadharCard', { required: true })} />
          {errors.aadharCard && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Pan Card</label>
          <input type='file'{...register('pancard', { required: true })} />
          {errors.pancard && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Income Proof</label>
          <input type='file'{...register('incomeProof', { required: true })} />
          {errors.incomeProof && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>Property Papers</label>
          <input type='file'{...register('propertyPapers', { required: true })} />
          {errors.propertyPapers && <span>This field is required</span>}
        </div>
      <div className="column">
          <label>Bank Statement</label>
          <input type='file'{...register('bankStatement', { required: true })} />
          {errors.bankStatement && <span>This field is required</span>}
        </div>
        </div>
      <div className="row">
        <div className="column">
          <label>NOC</label>
          <input type='file'{...register('nOC', { required: true })} />
          {errors.nOC && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
  const renderCustomerEnqDetails = () => (
    <div>
      <h3>Customer Enquiry Details</h3>
      <div className="row">
        <div className="column">
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Age</label>
          <input type="age" {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Gender</label>
          <select {...register('gender', { required: true })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Contact Number</label>
          <input {...register('contactNumber', { required: true })} />
          {errors.contactNumber && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>Email ID</label>
          <input {...register('emailId', { required: true })} />
          {errors.emailId && <span>This field is required</span>}
        </div>
      </div>

      <div className="row">
        <div className="column">
          <label>AdharNo</label>
          <input  {...register('aadharCardNumber', { required: true })} />
          {errors.aadharCardNumber && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>PanNo</label>
          <input {...register('pancardNumber', { required: true })} />
          {errors.pancardNumber && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Address</label>
          <input type="tel" {...register('address', { required: true })} />
          {errors.address && <span>This field is required</span>}
        </div>
   
    
    </div>
    <input type="hidden" {...register('cibilScore')}  />
    <input type="hidden" {...register('cibilStatus')} />
    <input type="hidden" {...register('loanStatus')} />
    <input type="hidden" {...register('date')} value={new Date().toISOString().split('T')[0]} />
    <input type="hidden" {...register('time')} value={new Date().toLocaleTimeString()} />
  </div>
  );
  const renderSanctionLetterDetails = () => (
    <div>
      <h3>Sanction Letter Details</h3>
      <div className="row">
        <div className="column">
          <label>ApplicantName</label>
          <input {...register('applicantName', { required: true })}hidden />
          {errors.applicantName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>SanctionDate</label>
          <input {...register('sanctionDate', { required: true })}hidden />
          {errors.sanctionDate && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>SanctionAmount</label>
          <input {...register('sanctionAmount', { required: true })}hidden />
          {errors.sanctionAmount && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>LoanTenure</label>
          <input {...register('loanTenure', { required: true })} hidden/>
          {errors.loanTenure && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>RateofInterest</label>
          <input {...register('rateofInterest', { required: true })} hidden/>
          {errors.rateofInterest && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>MonthlyEMIAmount</label>
          <input {...register('monthlyEMIAmount', { required: true })}hidden />
          {errors.monthlyEMIAmount && <span>This field is required</span>}
        </div>
        </div>
        <div className='row'>
        <div className="column">
          <label>SanctionDocpdf</label>
          <input {...register('sanctionDocpdf', { required: true })}hidden />
          {errors.sanctionDocpdf && <span>This field is required</span>}
        </div>
        </div>
    </div>
  );
  const renderLoanDisbursementDetails = () => (
    <div>
      <h3>Loan Disbursement Details</h3>
      <div className="row">
        <div className="column">
          <label>ApplicantName</label>
          <input {...register('applicantName', { required: true })}hidden />
          {errors.applicantName && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>TotalSanAmount</label>
          <input {...register('totalLoanSanctionedAmount', { required: true })}hidden />
          {errors.totalLoanSanctionedAmount && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>AmountPaidDate</label>
          <input {...register('amountPaidDate', { required: true })}hidden />
          {errors.amountPaidDate && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>PaymentStatus</label>
          <input {...register('paymentStatus', { required: true })}hidden />
          {errors.paymentStatus && <span>This field is required</span>}
        </div>
        </div>
        <div className="row">
        <div className="column">
          <label>AccoNumber</label>
          <input {...register('bankAccountNumber', { required: true })}hidden />
          {errors.bankAccountNumber && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>BranchName</label>
          <input {...register('bankBranchName', { required: true })}hidden />
          {errors.bankBranchName && <span>This field is required</span>}
        </div>
        </div>
        <div className='row'>
        <div className="column">
          <label>IFSC No</label>
          <input {...register('bankIfscNumber', { required: true })}hidden />
          {errors.bankIfscNumber && <span>This field is required</span>}
        </div>
      </div>
    </div>
  );
  const renderLedgerDetails = () => (
    <div>
      <h3>Ledger Details</h3>
      <div className="row">
        <div className="column">
          <label>LedgerCreatedDate</label>
          <input {...register('ledgerCreatedDate', { required: true })}hidden />
          {errors.ledgerCreatedDate && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>totalPrincipalAmount</label>
          <input {...register('totalPrincipalAmount', { required: true })}hidden />
          {errors.totalPrincipalAmount && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>PayableAmountWithInterest</label>
          <input  {...register('payableAmountWithInterest', { required: true })}hidden />
          {errors.payableAmountWithInterest && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>tenure</label>
          <input {...register('tenure', { required: true })}hidden />
          {errors.tenure && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>MonthlyEMI</label>
          <input  {...register('monthlyEMI', { required: true })} hidden/>
          {errors.monthlyEMI && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>AmountPaidTillDate</label>
          <input  {...register('amountPaidTillDate', { required: true })}hidden />
          {errors.amountPaidTillDate && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>RemainingAmount</label>
          <input  {...register('remainingAmount', { required: true })}hidden />
          {errors.remainingAmount && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>NextEmiStartDate</label>
          <input  {...register('nextEmiStartDate', { required: true })}hidden />
          {errors.nextEmiStartDate && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>NextEmiEndDate</label>
          <input  {...register('nextEmiEndDate', { required: true })} hidden/>
          {errors.nextEmiEndDate && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>PreviousEmiStatus</label>
          <input  {...register('previousEmiStatus', { required: true })}hidden />
          {errors.previousEmiStatus && <span>This field is required</span>}
        </div>
      </div>
     <div className="row">
        <div className="column">
          <label>CurrentMonthEmiStatus</label>
          <input  {...register('currentMonthEmiStatus', { required: true })}hidden/>
          {errors.currentMonthEmiStatus && <span>This field is required</span>}
        </div>
        <div className="column">
          <label>LoanEndDate</label>
          <input  {...register('loanEndDate', { required: true })}hidden />
          {errors.loanEndDate && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
      <div className="column">
          <label>Loan Status</label>
          <input {...register('loanStatus', { required: true })}hidden />
          {errors.loanStatus && <span>This field is required</span>}
      </div>
      <div className="column">
          <label>EMI Count </label>
          <input  {...register('emiCount', { required: true })}hidden />
          {errors.emiCount && <span>This field is required</span>}
      </div>
    </div>
    </div>
  );

 
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

 
  const renderStepForm = () => {
    switch (step) {
      case 1:
        return renderPersonalDetails();
      case 2:
        return renderAddressDetails();
      case 3:
        return renderEmploymentDetails();
      case 4:
        return renderBankDetails();
      case 5:
          return renderPropertyDetails();
      case 6:
            return renderGuarantorDetails();
      case 7:
            return renderDocumentDetails();
      case 8:
          return renderCustomerEnqDetails();
      case 9:
          return renderSanctionLetterDetails();
      case 10:
          return renderLoanDisbursementDetails();
      case 11:
          return renderLedgerDetails();
      default:
        return renderPersonalDetails();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      {renderStepForm()}
      <div className="button-group">
        {step > 1 && <button className='btna' type="button" onClick={prevStep}>Previous</button>}
        {step < 8 && <button className='btna' type="button" onClick={nextStep}>Next</button>}
        {step === 8 && <button className='btna' type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Register;