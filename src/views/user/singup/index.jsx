import React from 'react';
import './index.css';
import loginImg from './login.jpg';
import {Link} from 'react-router-dom';
import Layout from '../../../components/layout/layout';
const Signup=()=>{
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
                             <h1>Signup Screen</h1>
                         </div>
                         <div className="form-content flex flex-column flex-justify-center flex-items-center">
                          <form action="">
                             <div className="input-field">
                             <input type="text" placeholder="full name"/>
                             </div>
                             <div className="input-field">
                             <input type="text" placeholder="username"/>
                             </div>
                             <div className="input-field">
                             <input type="email" placeholder="forexample@gmail.com"/>
                             </div>
                              <div className="input-field">
                              <input type="password" placeholder="password"/>
                              </div>
                              <div className="input-field">
                              <button type="button">Signup</button>
                              </div>
                          </form>
                         </div>
                         <div className="other-requirement flex flex-column flex-justify-center flex-items-center">
                             <h3>already have account? <Link to='/login'>Login</Link></h3>
                         </div>
                     </div>
                 </div>
             </div>
             </Layout>
         </div>
    </>)
}
export default Signup;