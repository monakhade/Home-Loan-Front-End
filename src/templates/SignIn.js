import React from 'react'
import { useForm } from 'react-hook-form'
import '../style/SignIn.css'
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

function SignIn() {

  const { register, handleSubmit } = useForm();  
       const navigate=useNavigate();
  let baseUrl='http://localhost:8860/login/'
  const onLogin = auth => {
        axios.get(baseUrl+auth.userId+'/'+auth.upassword)
        .then(res=>{
          if(res.status===200)
          {
              let userJson=JSON.stringify(res.data);
                localStorage.setItem('user',userJson);   

              navigate('/dashboard')
          }
        
        }
        )
        .catch(error=>{
          console.log(error)
          if(error.status===500)
          {
             alert(error.response.data.message)
          }
          else{
             alert('Invaild Username and Password ....')
          }
        })
  }
  return (
    <div className='p-5'>
      <section className=" text-center text-lg-start mt-3">
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img src="https://i.pinimg.com/736x/cb/95/95/cb959599654ea89f0d9b1b4875e09447.jpg" alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div className="col-lg-8">
           
              <div className="card-body py-5 px-md-5">
              <div class="btn btn-outline-info align-items-center"><i class="bi bi-person-lock"></i> &nbsp;Login User<br/></div>
                <form onSubmit={handleSubmit(onLogin)}>
                 <br></br>
                
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control"
                      {...register('userId')} placeholder='Login ID'/>
                    <label className="form-label" forId="form2Example1">Enter Login ID</label>
                  </div>


                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control"
                      {...register('upassword')}placeholder='Password' />
                    <label className="form-label" forId="form2Example2">Password</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                  <select id="form2Example2" className="form-control"> 
                <option value="">Select User</option>Select User
                <option value="">Customer Relationship Management</option>
                <option value="">Operation Executive</option>
                <option value="">Relationship Manage</option>
                <option value="black">Account Head</option>
                <option value="">Admin</option>
              
            </select>
            </div>
                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" forId="form2Example31"> Remember me </label>
                      </div>
                    </div>

                    <div className="col">

                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>


                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SignIn