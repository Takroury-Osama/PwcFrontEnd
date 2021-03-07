import react, {Component} from 'react'
import axios from 'axios'
import {Button, Form, Modal} from 'react-bootstrap'

class Complaint extends Component{

  constructor(props) {
      super(props)

  this.state= {
      showModal:false,
      Types: [],
      typeId:"",
      complaintEmail:"",
      complaintText: "",
      complaintStatus: "",
      complaintUserName:""
  }
}


//get types of complaint from DB
componentDidMount(){
  axios.get('http://localhost:4000/types')
    .then(res => {
      this.setState({Types: res.data})
    //  console.log(res.data)
  })
    .catch(err => console.log(err))
}


//Catching inputs fields changes //add validate
FormHandler = (event) => {
  this.setState({[event.target.name]: event.target.value}, () => this.validateForm())
  }

//no need for validation but we do it here
validateForm = () => {
  return  true
}

SubmitComplaint = (event) => {
  if(this.validateForm()) {
    axios.post('http://localhost:4000/complaint', this.state)
    .then((res) => {
      console.log(res.data)
      this.setState({showModal:false})
    })
    .catch((err) => {
      console.log(err)
    })
    }
  }

   Example() {
    const handleClose = () => this.setState({showModal:false})
    const handleShow = () => this.setState({showModal:true})

    return (
      <>
        <h2 className="text-white"> You will See your complaint here. </h2>
        <Button variant="primary" onClick={handleShow}>
          New Complaint
        </Button>

        <Modal show={this.state.showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit="SubmitComplaint">
              <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="email" name="complaintUserName" onChange={this.FormHandler}/>
              </Form.Group>

              <Form.Group>
              <Form.Label>Complaint Type </Form.Label>
              <Form.Control as="select" name="Types">
                <option>select one</option>
                {
                  this.state.Types.length?
                  this.state.Types.map(type =>
                  <option key={type._id} value={type._id}>{type.typeName}</option>): null
                }
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Tell Us Your problem</Form.Label>
            <Form.Control as="textarea" rows={3} name="complaintText" onChange={this.FormHandler}/>
            </Form.Group>
              </Form>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.SubmitComplaint}>
              Send Complaint
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

      render() {
        return(this.Example())
      }
}

export default Complaint
