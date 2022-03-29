import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bigStar from '../assets/bigStar.png'

export const DevicePage = () => {

    const device = {
        "id": 3,
        "name": "P32",
        "price": 500,
        "rating": 2,
        "img": "data:image/jpeg;base64,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",
        "createdAt": "2022-03-24T04:45:08.244Z",
        "updatedAt": "2022-03-24T04:45:08.244Z",
        "typeId": 2,
        "brandId": null
    }

    const description = [
        {id:1, title: 'RAM', description: '4 Gb'},
        {id:2, title: 'Camera', description: '42 Mpx'},
        {id:3, title: 'Battery', description: '4000 Ah'}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}> Add to device </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1> Description </h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

