import React, {useState, useEffect} from 'react'
import {Form , Button} from 'react-bootstrap'
import axios from 'axios'
import {AppContext} from '../App'


const Login = (props) => {
  const [userLog, setuserLog] = useState({userEmail:'', userPassword:''});
  const AppStates = React.useContext(AppContext)

  const handleChange =(event) => {
    setuserLog({...userLog, [event.target.name]: event.target.value});
  }

function handleSubmit(event) {
  event.preventDefault()
  console.log('in login');
  axios.post('http://localhost:4000/login', userLog)
  .then((res) => {
    console.log(res.data);
    console.log('----', AppStates);
    if(res.data.userIsAdmin === true) {
    AppStates.setLoginState('admin');
    }
  else{
    AppStates.setLoginState('user')
  }
  })
  .catch((err) => {
    console.log(err);
  })

}

  return (
        <form onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="userEmail" placeholder="Enter Your Email" onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="userPassword" placeholder="Password"  onChange={handleChange} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        </form>
    );
}

export default Login;
