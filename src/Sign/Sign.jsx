import React, { useState } from 'react';
import './Sign.css';
import SubFooter from '../Footer/SubFooter'

export default function Sign() {
  const [signInMessage, setSignInMessage] = useState('');
  const [signUpMessage, setSignUpMessage] = useState('');

  // Function to handle Sign-Up
  const handleSignUp = () => {
    const name = document.getElementById('sign-up-name').value;
    const email = document.getElementById('sign-up-email').value;
    const mobileNo = document.getElementById('sign-up-mobileno').value;
    const password = document.getElementById('sign-up-password').value;
    const confirmPassword = document.getElementById('sign-up-confirmpassword').value;

    if (!name || !email || !mobileNo || !password || !confirmPassword) {
      setSignUpMessage('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setSignUpMessage('Passwords do not match!');
      return;
    }

    // Save user data in local storage
    const userData = { name, email, mobileNo, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserExist = users.some((user) => user.email === email);

    if (isUserExist) {
      setSignUpMessage('User already exists!');
    } else {
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      setSignUpMessage('Account created successfully!');
      
    const div01=document.getElementById('sign-in')
    const div02=document.getElementById('sign-up')

    setTimeout(() => {
      div01.style.display = 'block';
      div02.style.display = 'none';
    }, 1000);
    }
  };

  // Function to handle Sign-In
  const handleSignIn = () => {
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    if (!email || !password) {
      setSignInMessage('All fields are required!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setSignInMessage(`Welcome back, ${user.name}!`);

      setTimeout(() => {
        window.location.href = '/Home';
      }, 1000);

    } else {
      setSignInMessage('Invalid email or password!');
    }
  };

  const clickhere1=()=>{
    const div1=document.getElementById('sign-in')
    const div2=document.getElementById('sign-up')

    div1.style.display='none'
    div2.style.display='block'
  }

  const clickhere2=()=>{
    const div01=document.getElementById('sign-in')
    const div02=document.getElementById('sign-up')

    div01.style.display='block'
    div02.style.display='none'
  }

  return (
    <div>
      <h2 style={{textAlign:'center',margin:'10px 0px 10px 0px'}}>SIGN &nbsp; IN / UP</h2>
    <div className='sign-body'>
      <div className='overall'>

        {/* Sign in content */}
        <div id='sign-in' className='sign-in'>
          <input type="text" placeholder='Email' id='sign-in-email' /> <br />
          <input type="password" placeholder='Password' id='sign-in-password' /> <br />
          <button onClick={handleSignIn}>Sign in</button>
          <p style={{ color: 'red',fontSize:'25px' }}>{signInMessage}</p>
          <hr />
          <p>Don't have an account? <span onClick={clickhere1}>Click here</span> <br /> to create an account.</p>
        </div>

        {/* Sign up content */}
        <div id='sign-up' className='sign-up'> <br />
          <input type="text" placeholder='Name' id='sign-up-name' /> <br />
          <input type="text" placeholder='Email' id='sign-up-email' /> <br />
          <input type="number" placeholder='Mobile no' id='sign-up-mobileno' /> <br />
          <input type="password" placeholder='Password' id='sign-up-password' /> <br />
          <input type="password" placeholder='Confirm Password' id='sign-up-confirmpassword' /> <br />
          <button onClick={handleSignUp}>Sign up</button>
          <p style={{ color: 'green',fontSize:'25px' }}>{signUpMessage}</p>
          <hr />
          <p>Already have an account? <span onClick={clickhere2}>Click here</span> <br /> to Sign in.</p>
        </div>

      </div></div>
      <div style={{margin:'0px 0px 0px 0px'}}><SubFooter/></div> 

    </div>
  );
}
