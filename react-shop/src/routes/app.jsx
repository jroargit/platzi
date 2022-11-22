import React from 'react';
import 'Styles/global';
import Layout from 'Containers/Layout';
import Login from 'Pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoveryPassword from 'Pages/RecoveryPassword';
import NotFound from 'Pages/NotFound';
import Home from 'Pages/Home';
import SendEmail from 'Pages/SendEmail';
import NewPassword from 'Pages/NewPassword';
import MyAccount from 'Pages/MyAccount.jsx';
import CreateAccount from 'Pages/CreateAccount.jsx';
import CheckOut from 'Pages/CheckOut';
import Orders from 'Pages/Orders';

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
                    <Route path='/recovery-password' element={<Orders/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Layout> 
        </BrowserRouter>
    );
}

export default App;
