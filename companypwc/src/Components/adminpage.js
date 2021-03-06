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


const AdminPage = () => {
  let [Complaint, setComplaint] = useState([])
  let [Update, setUpdate] = useState({
    Name:'osa',
    Email:'osa',
    Phone:'99999',
    Datetime:'',
    Location:'',
  });




    let DeleteData =() => {

  //  console.log(props.ID);
  //  axios.delete('http://localhost:4000/booking/'+ ID)
  //      .then((res) => {
  //        console.log(res);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      })
  // }
    alert("delete");

    }

  let UpdateData = (event) => {

    setUpdate(Update)


    //  axios.put('http://localhost:4000/booking/'+ ID)
    //      .then((res) => {
    //        console.log(res);
    //      })
    //      .catch((err) => {
    //        console.log(err);
    //      })
    // }
  }

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
        <Card.Title>Osama Altakroruy</Card.Title>
        <Card.Text>
          {complaint.typeName}
        </Card.Text>
        <Card.Text>
          {complaint.complaintText}
        </Card.Text>
        <Card.Text>
          {complaint.complaintStatus}
        </Card.Text>
        <ButtonGroup className="mx-2">
        <Button variant="primary">Pending</Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button variant="success" >Resolved</Button>
        </ButtonGroup>
        <ButtonGroup className="mx-2">
        <Button variant="danger">Dismissed</Button>
        </ButtonGroup>
      </Card.Body>
      </Card>
    ): <span> null </span> }

      </div>
  )
}

export default AdminPage
