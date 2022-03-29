import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";


export const NavBar = observer( () => {

    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink style={{color: 'white', width: ''}}
                         to={'/shop'}> Store </NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button onClick={() => navigate('/admin')} style={{border: '2px solid white'}}> Admin </Button>
                        <Button onClick={() => logOut()} style={{border: '2px solid white',  marginLeft: "5px"}}> Logout </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            style={{border: '2px solid white'}} onClick={()=> navigate('/login')}> Authorization </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

