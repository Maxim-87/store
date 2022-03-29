import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

export const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card key={brand.id}
                      className='p-3 w-25'
                      style={{cursor: 'pointer', margin: '5px'}}
                      onClick={() => {device.setSelectedBrand(brand)}}
                      border={brand.id === device.selectedBrand.id ? 'danger' : 'dark'}
                >
                    {brand.name}
                </Card>)}
        </Row>
    );
});
