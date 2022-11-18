import React from 'react';
import '../styles/global.scss';
import Layout from '../containers/Layout';
import Login from '../pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoveryPassword from '../pages/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import CheckOut from '../pages/CheckOut';
import Orders from '../pages/Orders';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/recovery-password' element={<RecoveryPassword/>}/>
                    <Route path='/send-email' element={<SendEmail/>}/>
                    <Route path='/new-password' element={<NewPassword/>}/>
                    <Route path='/my-account' element={<MyAccount/>}/>
                    <Route path='/create-account' element={<CreateAccount/>}/>
                    <Route path='/check-out' element={<CheckOut/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Layout> 
        </BrowserRouter>
    );
}

export default App;
