import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index.js";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export const TypeBar = observer(() => {

  const {device} = useContext(Context)

    return (
        <ListGroup className="list-group mt-2 p-2">
            {device.types.map(type =>
                <ListGroup.Item key={type.id}
                                style={{cursor: 'pointer'}}
                                active={type.id === device.selectedType.id}
                                onClick={() => device.setSelectedType(type)}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

