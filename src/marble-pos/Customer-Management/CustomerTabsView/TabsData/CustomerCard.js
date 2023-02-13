import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
const data= [




    {OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Black marble",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000},
        {OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Gray Marble",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000},
        {OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Badal",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000},
        {OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Item 2",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000},
        {OrderDate: "12/05/2022 , 5pm",
        Id: 323,
        ItemName: "Item 3",
        ItemQuantity: 100,
        SetPrice: 70,
        YourBill: 70000},
        
    // {itemName:"Green Marbel",cost:21,totalQty:211,totalAmount:21213},
    // {itemName:"Red Wire",cost:98,totalQty:879,totalAmount:21213},
    // {itemName:"Fret bell",cost:6,totalQty:786,totalAmount:21213},
    // {itemName:"Muted Heg",cost:26,totalQty:56,totalAmount:21213},
    // {itemName:"Chicken",cost:97,totalQty:897,totalAmount:21213},
    // {itemName:"Hot Dog",cost:23,totalQty:988,totalAmount:21213},
    // {itemName:"Rich Bag",cost:23,totalQty:454,totalAmount:21213},
    // {itemName:"Leg Piece",cost:23,totalQty:123,totalAmount:21213},
    // {itemName:"Yellow",cost:23,totalQty:213,totalAmount:21213},
    // {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    // {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    // {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    // {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
    // {itemName:"Red Marbel",cost:23,totalQty:213,totalAmount:21213},
]
const ExampleCardsList = () => {
  return (
    <Container fluid className="p-0">
      <Row className="d-flex overflow-auto">
        {data.map((dat, idx) => (
          <Col key={idx} xs={12} className="my-3">
            <Card className="w-100">
              <Card.Header as="h5">{dat.ItemName}</Card.Header>
              <ListGroup variant="flush">
              <ListGroup.Item>Order Date: {dat.OrderDate}</ListGroup.Item>
                <ListGroup.Item>Cost of Item: {dat.SetPrice}</ListGroup.Item>
                <ListGroup.Item>Total Quantity: {dat.ItemQuantity}</ListGroup.Item>
                <ListGroup.Item>Total Amount: {dat.YourBill}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExampleCardsList;
