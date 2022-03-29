import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
// import prom from '../assets/Без названия.jpg'

export const DeviceItem = ({device}) => {

    const navigate = useNavigate()

        return (
        <Col md={3} /* три столбца */ className={'mt-3'} onClick={() => navigate('/device' + '/' + device.id)}>
            <Card style={{width: '150', cursor: 'pointer'}} border={'dark'}>
                <Image width={150} height={150} src={device.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                    <div>
                        Samsung
                    </div>
                    <div className=' d-flex align-items-center'>
                        <div>
                            {device.rating}
                            <Image width={15} height={15} src={star}/>
                        </div>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

