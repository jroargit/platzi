import React from 'react';
import '../styles/global.scss';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/recovery-password' element={<RecoveryPassword/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Layout> 
        </BrowserRouter>
    );
}

export default App;
