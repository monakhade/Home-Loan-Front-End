import React from 'react'
import ProfileNav from './ProfileNav'
import SideNav from './SideNav'
import { Route, Routes } from 'react-router-dom'
import LoanApproved from '../modules/loanservice/AccountHead/LoanApproved';
import LoanClose from '../modules/loanservice/AccountHead/LoanClose';
import DataFrdToOE from '../modules/loanservice/Operation Executive/DataFrdToOE'
import RejectedDocument from '../modules/loanservice/Operation Executive/RejectedDocument'
import VerifiedDocuments from '../modules/loanservice/Operation Executive/VerifiedDocuments'

import AddEnquiry from '../modules/loanservice/Relationship-Manager/enquiry/AddEnquiry'
import ViewEnquiers from '../modules/loanservice/Relationship-Manager/enquiry/ViewEnquiers'
import LoanForm from '../modules/loanservice/Relationship-Manager/loan/LoanForm'
import EMI from '../modules/loanservice/Credit-Manager/emi/EMI'
import CalculateEMI from '../modules/loanservice/Credit-Manager/emi/CalculateEMI'
import Sanction from '../modules/loanservice/Credit-Manager/sanction/Sanction'
import GenerateSanction from '../modules/loanservice/Credit-Manager/sanction/GenerateSanction'
import CibilApproved from '../modules/loanservice/Relationship-Manager/cibil/CibilApproved'
import CibilRejected from '../modules/loanservice/Relationship-Manager/cibil/CibilRejected'
import FwtoOE from '../modules/loanservice/Relationship-Manager/cibil/FwtoOE'
function DashBoard() {
      let userJson= localStorage.getItem('user');
      const {userType} =   JSON.parse(userJson);
  const appRoutes={
     AH:[
       {path:'/loan-Approve' ,component:<LoanApproved/>},
       {path:'/loan-Close' ,component:<LoanClose/>},
     ],
     OE:[
      {path:'/frw-to-oe',component:<DataFrdToOE/>},
      {path:'/verify-doc',component:<VerifiedDocuments/>},
      {path:'/reject-doc',component:<RejectedDocument/>},
    ],
    CRM:[
     {path:'/view-enquiries',component:<ViewEnquiers/>},
     {path:'/edit-enquiry/:enquiryId', component:<AddEnquiry/>},
     {path:'/apply-loan/:customerEnquiryId' ,component:<LoanForm/>},
     {path:'/cibilAP', component:<CibilApproved/>},
     {path:'/cibilRJ', component:<CibilRejected/>},
     {path:'/fwtoOE', component:<FwtoOE/>},
     {path:'/addEnquiry', component:<AddEnquiry/>}
    ],
    CM:[
     {path:'/emi-check',component:<CalculateEMI/>},
     {path:'/check/:customerEnquiryId', component:<EMI/>},
     {path:'/sanction', component:<Sanction/>},
     {path:'/getsanction/:CustomerRegId', component:<GenerateSanction/>}
    ]
  }

  return (
    <div>
        <ProfileNav/>
        <div className='row w-200 mt-2 '> 
             <div className='col col-3 bg-primary'> 
                <SideNav/>
             </div>
             <div className='col col-9 border border-dark'>
               <Routes> 
                {
                  appRoutes[userType].map((mapping,index)=> <Route path={mapping.path} element={mapping.component} />)
                }
                </Routes>

             </div>
        </div>
     
    </div>
  )
}

export default DashBoard