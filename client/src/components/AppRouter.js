import React, {useContext} from 'react';
import {Route, Routes} from "react-router";
import {Auth} from "../pages/Auth";
import {Shop} from "../pages/Shop";
import {Basket} from "../pages/Basket";
import {Admin} from "../pages/Admin";
import {DevicePage} from "../pages/DevicePage";
import {Context} from "../index";

const AppRouter = () => {

    const {user} = useContext(Context)
    console.log(user)


    if (user.isAuth) {
        return <Routes>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/basket' element={<Basket/>}/>
        </Routes>
    }

    return (
        <Routes>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/registration' element={<Auth/>}/>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/device/:id' element={<DevicePage/>}/>
            <Route path="*" element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter
