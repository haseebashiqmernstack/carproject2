import React from 'react';
import './index.css';
import loginImg from './login.jpg';
import {Link} from 'react-router-dom';
import Layout from '../../../components/layout/layout';
const Login=()=>{
    return (<>
         <div className="container">
            <Layout>
             <div className="login flex flex-row">
                 <div className="banner">
                     <img src={loginImg}/>
                 </div>
                 <div className="login-form">
                     <div className="inner-form flex flex-column flex-justify-center flex-items-center">
                         <div className="title flex flex-row flex-justify-center flex-items-center">
                             <h1>Login Screen</h1>
                         </div>
                         <div className="form-content flex flex-column flex-justify-center flex-items-center">
                          <form action="">
                             <div className="input-field">
                             <input type="text" placeholder="username"/>
                             </div>
                              <div className="input-field">
                              <input type="password" placeholder="password"/>
                              </div>
                              <div className="input-field">
                              <button type="button">Login</button>
                              </div>
                          </form>
                         </div>
                         <div className="other-requirement flex flex-column flex-justify-center flex-items-center">
                             <h3>if you not register? <Link to='/signup'>Signup</Link></h3>
                         </div>
                     </div>
                 </div>
             </div>
             </Layout>
         </div>
    </>)
}
export default Login;