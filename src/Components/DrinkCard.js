import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function DrinkCard({coffee, handleClick}) {
const { title, image, description } = coffee

    return (
        <Col>
          <Card style={{ width: '25rem'}} className="card">
            <Card.Img variant="top" src={image} className="card-image" />
            <Card.Body>
              <Card.Title className="card-title">{title}</Card.Title>
              <Card.Text className="card-body">
               {description}
              </Card.Text>
              <Button variant="outline-secondary" onClick={() => {handleClick(coffee)}}>
              {coffee.isFavorited ? "♥" : "♡"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default DrinkCard;