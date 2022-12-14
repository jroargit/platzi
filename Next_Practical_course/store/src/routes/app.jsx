import React from 'react';
import 'Styles/global.scss';
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
import AppContext from 'Context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
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
        </AppContext.Provider>
    );
};

export default App;
