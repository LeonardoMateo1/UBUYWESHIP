import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import Footer from '../Footer'
import Logout from '../Logout'

const UserDashboard = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    useEffect(() => {
      axios.get("http://localhost:8000/api/user/products", { withCredentials: true })
          .then((res) => {
              console.log(res.data);
              setFirstName(res.data.user.firstName);
              setLastName(res.data.user.lastName);
          })
          .catch((err) => console.log(err));
  }, [])

  
  return (
    <div>
        <Nav/>
        <div className='flex items-center justify-center w-full h-screen '>
          <Logout/>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default UserDashboard