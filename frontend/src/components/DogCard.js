import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import image from '../images/Kali.jpeg'

const DogCard = () => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>[Dog Name]</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Last Fed: </ListGroupItem>
                <ListGroupItem>Breed: </ListGroupItem>
                <ListGroupItem>Age: </ListGroupItem>
                <ListGroupItem>Weight: </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default DogCard