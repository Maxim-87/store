import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
// import {LOGIN_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

export const Auth = observer( () => {

    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation();
    const isLogin = location.pathname === '/login'
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email,password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/device')
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'> {isLogin ? 'Authorization' : 'Registration'} </h2>
                <Form className='d-flex flex-column'>
                    <FormControl
                        className='mt-2'
                        placeholder='Enter email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >
                    </FormControl>
                    <FormControl
                        className='mt-2'
                        placeholder='Enter password...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={'password'}>

                    </FormControl>
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'
                    style={{justifyContent: "end"}}>
                        {isLogin ?
                            <div>
                            No account? <NavLink to='/registration'> Registration </NavLink>
                        </div> :
                            <div>
                                Do you have account? <NavLink to='/login'> login </NavLink>
                            </div>
                        }

                        <Button style={{width: '80px'}}
                                variant="outline-success"
                        onClick={signIn}>
                            {isLogin ? 'Login' : 'Registration'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

