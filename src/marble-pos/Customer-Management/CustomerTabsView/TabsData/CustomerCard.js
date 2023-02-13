import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
const data= [
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Green Marbel",cost:21,totalQty:211,totalAmount:21213},
    {itemName:"Red Wire",cost:98,totalQty:879,totalAmount:21213},
    {itemName:"Fret bell",cost:6,totalQty:786,totalAmount:21213},
    {itemName:"Muted Heg",cost:26,totalQty:56,totalAmount:21213},
    {itemName:"Chicken",cost:97,totalQty:897,totalAmount:21213},
    {itemName:"Hot Dog",cost:23,totalQty:988,totalAmount:21213},
    {itemName:"Rich Bag",cost:23,totalQty:454,totalAmount:21213},
    {itemName:"Leg Piece",cost:23,totalQty:123,totalAmount:21213},
    {itemName:"Yellow",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
]
const ExampleCardsList = () => {
  return (
    <Container fluid className="p-0">
      <Row className="d-flex overflow-auto">
        {data.map((dat, idx) => (
          <Col key={idx} xs={12} className="my-3">
            <Card className="w-100">
              <Card.Header as="h5">{dat.itemName}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cost of Item: {dat.cost}</ListGroup.Item>
                <ListGroup.Item>Total Quantity: {dat.totalQty}</ListGroup.Item>
                <ListGroup.Item>Total Amount: {dat.totalAmount}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExampleCardsList;
