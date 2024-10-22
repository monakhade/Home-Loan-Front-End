import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RejectedDocument() {
  const [enqdata, setEnquiry] = useState([]);
  const [error, setError] = useState('');

  
  function getAcceptedData() {
    axios.get('http://localhost:8856/getAllByLoanStatus/DocRejected')
      .then(res => {
        if (res.status === 200) {
            console.log(res.data)
          setEnquiry(res.data);
        }
      })
      .catch(error => {
        setError('Something went wrong while fetching data');
      });
  }

  useEffect(() => {
    getAcceptedData();
  }, []);

  
  const sendEmail = (emailId) => {
   
    console.log(`Sending email to: ${emailId}`);
    alert(`Email sent to ${emailId}`);
  };

  return (
    <div>
      <h3>Rejected Documents</h3>
      <table className='table table-bordered table-primary'>
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
            <th>Send Email</th>
          </tr>
        </thead>
        <tbody>
          {
            enqdata.map((enq, index) => (
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
                <td>
                  <button onClick={() => sendEmail(enq.emailId)}>
                    Send Email
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default RejectedDocument;
