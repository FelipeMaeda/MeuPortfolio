import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

export default function CardContent() {
    return (
        <div style={{ background: 'linear-gradient(#f8f9fa, #fff)' }}>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Projeto 1</Card.Title>
                        <Card.Text>
                            PRojeto 1?
                            Lorem Ipsolum at
                            Adisdo Nuyit nu on
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}