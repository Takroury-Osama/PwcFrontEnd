import react , {useState, useEffect} from 'react'
import axios from 'axios'
import Complaint from './complaint';
import {Card , Button, ButtonGroup} from 'react-bootstrap'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const AdminPage = (props) => {
  let [Complaint, setComplaint] = useState([])

  // let [Update, setUpdate] = useState({
  //
  // });


  let UpdateData = (props) => {
    console.log(Complaint[0]._id);
    console.log();

    // setUpdate(Update)
    //  axios.put('http://localhost:4000/editcomplaint/'+ ID)
    //      .then((res) => {
    //        console.log(res);
    //      })
    //      .catch((err) => {
    //        console.log(err);
    //      })
    // }
  }

//get all complaint for admin from database
useEffect(() => {
  axios.get('http://localhost:4000/complaints')
      .then((res) => {
        console.log(res.data);
        setComplaint(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
    },[]);

  return (
    <div className="my-5">
    {Complaint.length? Complaint.map(complaint =>
    <Card style={{ width: '30rem' }} key={complaint._id}>
      <Card.Body>
        <Card.Title>{complaint.complaintUserName}</Card.Title>
        <Card.Text>
          {complaint.typeName}
        </Card.Text>
        <Card.Text>
        <strong>Complaint: </strong>
          {complaint.complaintText}
        </Card.Text>
        <Card.Text>
        <strong>Status: </strong>
           {complaint.complaintStatus}
        </Card.Text>
        <ButtonGroup className="mx-2">
        <Button variant="primary" onClick={()=>UpdateData(props)} name="Pending">Pending</Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button variant="success" onClick={()=>UpdateData(props)} name="Resolved">Resolved</Button>
        </ButtonGroup>
        <ButtonGroup className="mx-2">
        <Button variant="danger" onClick={()=>UpdateData(props)} name="Dismissed">Dismissed</Button>
        </ButtonGroup>
      </Card.Body>
      </Card>
    ): <span> null </span> }

      </div>
  )
}

export default AdminPage
