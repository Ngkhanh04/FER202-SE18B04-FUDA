import React from "react";
import {Card,Button} from "react-bootstrap";

function Field() {
    return(
        <>
        <center><h3 style={{
            padding:'20px'
        }}>List of Field</h3></center>
        <div id='topfield' style={{
          display:'flex',
          flexWrap:'wrap',
          padding: '0 7rem',
          justifyItems: 'center'}}>
    
          <Card style={{ width: '18rem', margin:'2rem'}}>
            <Card.Img variant="top" src="images/san1.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 1</Card.Title>
              <Card.Text>
                This field is at the bottom-left
                <h5>$10</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff', border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:"none"}}href="">Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'2rem' }}>
            <Card.Img variant="top" src="images/san2.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 2</Card.Title>
              <Card.Text>
              This field is on the top-right
              <h5>$12</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff',border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:"none"}}>Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'2rem' }}>
            <Card.Img variant="top" src="images/san3.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 3</Card.Title>
              <Card.Text>
              This field is at the top-left
              <h5>$11</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff', border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:'none'}}>Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'2rem' }}>
            <Card.Img variant="top" src="images/san4.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 4</Card.Title>
              <Card.Text>
              This field is at the top-left
              <h5>$11</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff', border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:'none'}}>Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'2rem' }}>
            <Card.Img variant="top" src="images/san3.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 5</Card.Title>
              <Card.Text>
              This field is at the top-left
              <h5>$11</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff', border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:'none'}}>Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', margin:'2rem' }}>
            <Card.Img variant="top" src="images/san1.jpg" height="200rem"/>
            <Card.Body>
              <Card.Title>Field 6</Card.Title>
              <Card.Text>
              This field is at the top-left
              <h5>$11</h5>
              </Card.Text>
              <Button style={{backgroundColor:'#6897ff', border:"none"}}>Detail</Button>{' '}
              <Button style={{backgroundColor:'#FFAF00', border:'none'}}>Book</Button>
            </Card.Body>
          </Card>
       </div>
        </>
      );
};

export default Field;