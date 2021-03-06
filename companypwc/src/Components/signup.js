import React, {useState} from 'react'
import {Form , Button} from 'react-bootstrap'
import axios from 'axios'


const SignUp = (props) => {

  const [state, setState] = useState({
    Email: "",
    userName: "",
    userPassword: "",
  //  userIsAdmin: ""
  })

  const handleChange = (event) => {
        const {name , value} = event.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

  const SubmitForm = (event) => {
    event.preventDefault();
    alert("done");
    axios.post('http://localhost:4000/user', state)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }



  return (
    <div className="container">
    <Form onSubmit={SubmitForm}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="Email" placeholder="Enter Your Email" onChange={handleChange} />
    </Form.Group>

    <Form.Group controlId="formBasicUserName">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" name="userName" placeholder="Enter Your Name" onChange={handleChange}  />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="userPassword" placeholder="Password" onChange={handleChange}  />
    </Form.Group>

    <Button variant="primary" type="submit">Sign Up</Button>
  </Form>
</div>
  );
}

export default SignUp;
