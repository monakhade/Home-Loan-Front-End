import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Commun.css'

function ProfileNav() {

    let userJson= localStorage.getItem('user');
    const  {userId,userType ,userName} =JSON.parse(userJson)

  return (
    <div className='bg-primary d-flex justify-content-between ps-3 pe-3'>

         <div className='d-flex '>
         <img src='https://i.pinimg.com/564x/c1/f6/3a/c1f63a105cd09ac494907045aa30d4f7.jpg' className='profile-image' width={'100px'} height={'90px'} alt="image not available"/>
         <div>
         <h2 className='text-warning fs-5'>Userid:-{userId}</h2>
         <h2 className='text-warning fs-5'>Usertype:-{userType}</h2>
         <h2 className='text-warning fs-5'>Username:-{userName}</h2>
         </div>
         </div>

         <div>
         <Link className='btn btn-danger mt-3' to={'/'}>Logout</Link>
         </div>
        
    </div>
  )
}

export default ProfileNav