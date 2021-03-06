import React, {useState, useEffect} from 'react'
import {Form , Button} from 'react-bootstrap'
import axios from 'axios'
import style from '../Containers/css/login.css'
import {AppContext} from '../App'


const Login = (props) => {
  const [userLog, setuserLog] = useState({userEmail:'', userPassword:''});
  const AppStates = React.useContext(AppContext)

  const handleChange =(event) => {
    setuserLog({...userLog, [event.target.name]: event.target.value});
  }

function handleSubmit(event) {
  event.preventDefault()
//  console.log('in login');
  axios.post('http://localhost:4000/login', userLog)
  .then((res) => {
  //  console.log(res.data);
  //  console.log('----', AppStates);
    if(res.data.userIsAdmin === true) {
    AppStates.setLoginState('admin');
    }
  else {
    AppStates.setLoginState('user')
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
  return (
    <div className="container">
        <Form className="login-form" onSubmit={handleSubmit}>
        <h2> Login Page </h2>
            <Form.Group controlId="formBasicEmail" className="square">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="userEmail" placeholder="Enter Your Email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="square">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="userPassword" placeholder="Enter Your Password" onChange={handleChange} />
            </Form.Group>

            <button type="submit" className="btn btn-primary btn-ghost">Login</button>
        </Form>
      </div>
    );
}

export default Login;
