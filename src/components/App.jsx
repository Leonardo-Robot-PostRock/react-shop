import React from 'react';
import Login from '../containers/Login';
import '../styles/global.css';
import '../styles/Login.scss'
import Layout from '../containers/Layout';


const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;