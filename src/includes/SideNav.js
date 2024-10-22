import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SideNav.css'

function SideNav() {
  let userJson=  localStorage.getItem('user')
  const {userType}      =JSON.parse(userJson);

  let options={
      AH:[
              {lable :'LoanApprove', to:'loan-Approve'},
              {lable :'LoanSanction', to:'loan-Close'}
            ],
            OE:[
              {lable:'Verified Documents',to:'verify-doc'},
              {lable:'Show Frd-to-OE Enquiry',to:'frw-to-oe'},
              {lable:'Rejected Documents',to:'reject-doc'}, 
            ],
            CRM:[
              //  {lable:'Add Enquiry',to:'addEnquiry'},
               {lable:'View Enquiries',to:'view-enquiries'},
               {lable:'Apply For Loan',to:'apply-loan'},
               {lable:'CibilApproved',to:'cibilAP'},
               {lable:'CibilRejected',to:'cibilRJ'},
               {lable:'Forward to OE',to:'fwtoOE'}
             ],
          ADMIN:[
                  {lable :'Add Employee', to:'add-employee'},
                  {lable :'View Employies', to:'view-employies'}            
                ],
          CM:[
                {lable:'Calculate EMI', to:'emi-check'},
                {lable:'Generate Sanction Letter', to:'sanction'}
          ]        
            
  }

  return (
    <div  className='nav-container'>
        
        {
             
            options[userType].map((btn,index)=><Link className='btn btn-light mt-3' to={btn.to}>{btn.lable}</Link>)
        }
       
    </div>
  )
}

export default SideNav