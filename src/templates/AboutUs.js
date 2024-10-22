import React from 'react';
import '../style/AboutUs.css'; 


const AboutUs = () => {
  return (
    <div><div>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.pinimg.com/564x/19/9a/51/199a51cd3b8815ca86930a830d8a4b9a.jpg" class="img-fluid rounded-start" alt="..." className='w-75'/>
          </div>
          <div class="col-md-8">
            <div class="card-body" className='w-75'>
              <h2 class="card-title">Apply Home Loan Online</h2><br/>
              <h4 class="card-text">Own a home of your choice with the market's most attractive loan.</h4>
              <p>
              Kickstart your Home-Ownership with our Exclusive Home Loan Offers<br/>
              <i class="bi bi-alarm"></i> Quick Processing<br/>
              <i class="bi bi-file-earmark-pdf"></i>Hassle Free Documentation<br/>
              </p>
              <div>
                <h3>Existing Customer</h3>
                <p>As an existing customer, you can log in with registered Bank details and raise a Home Loan request in four simple steps:</p>
                <i class="bi bi-person-check">Verify Account<br/></i>
                <i class="bi bi-database-fill-up">Check Offer<br/></i>
                <i class="bi bi-wallet2">Make Payment<br/></i>
                <i class="bi bi-pencil-square">Get Sanction Letter<br/></i>
              </div>
              <button class="btn btn-link" type="button">Apply Now</button> 
            </div>
          </div>
        </div>
      </div>
      <div>
      <div class="card">
       
        <div class="card-body-Apply">
          <h5 class="card-title">Home Loans at Our Bank</h5>
          <p class="card-text">
      
      Rely on the wide range of Home Loans offered by HDFC Bank to buy or construct your dream home. Get Home Loans for purchasing, building, renovating, repairing, or redecorating your perfect living space. You can also opt to transfer your existing Home Loan from another lender over to us to benefit from our loan offers. 
      
      
      At HDFC Bank, you can enjoy attractive Home Loan interest rates along with a hassle-free loan application process, easy loan repayment options, and flexible tenures. We offer a range of Home Loans, including Top Up Loans, Home Improvement Loans, and Home Extension Loans.
      
      
      <h6>1. Apply Online for a Home Loan</h6>
      Attractive Interest Rates<br/>
      Seamless Digital Application Process<br/>
      Special Processing Fees for Government Employees
      {/* <h6>2. Home Loan Balance Transfer</h6>
      Simple & Easy Digital Application Process<br/> */}
      {/* <h6>3.Avail Top Up on existing Home Loan<br/></h6>
Maximum Top Up Loan of ₹50 lacs*<br/>
Loans for existing customers<br/>
Attractive Interest Rates */}
      <div class="d-grid gap-2">
  <button class="btn btn-link" type="button">Terms & Conditions</button> 
</div>
      </p>
          <a href="#" class="btn btn-primary">Apply Now</a>
        </div>
      </div>
      </div></div>
  );
};

export default AboutUs;
