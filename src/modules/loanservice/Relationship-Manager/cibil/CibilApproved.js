import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoanForm from '../../../../modules/loanservice/Relationship-Manager/loan/LoanForm'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CibilApproved() {
    const [enqdata, setEnquiry] = useState([]);
    const [showForm, setShowForm] = useState(false);  
   

    function getEnquiryByCibil() {
        axios.get('http://localhost:8855/getAllByLoanStatus/CIBIL_approved')
            .then(res => {
                if (res.status === 200) {
                    setEnquiry(res.data);
                }
            })
            .catch(() => alert('Something went wrong....!'));
    }

    useEffect(() => {
        getEnquiryByCibil();
    }, []);

    return (
        <div>
            
            {showForm ? (
                <LoanForm />  // Show the registration form
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
                                <th>CIBIL Status</th>
                                <th>Loan Status</th>
                                <th>Apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enqdata.map((enq, index) => (
                                <tr key={index}>
                                    <td>{enq.customerEnquiryId}</td>
                                    <td>{enq.firstName}</td>
                                    <td>{enq.lastName}</td>
                                    <td>{enq.contactNumber}</td>
                                    <td>{enq.emailId}</td>
                                    <td>{enq.aadharCardNumber}</td>
                                    <td>{enq.pancardNumber}</td>
                                    <td>{enq.cibilStatus}</td>
                                    <td>{enq.loanStatus}</td>
                                   
                                    <Link to={`/dashboard/apply-loan/${enq.customerEnquiryId}`}>
                                    <button className='btn-btn-primary'>
                                          Apply for loan
                                    </button>
                                    </Link>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default CibilApproved;