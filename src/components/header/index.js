import React, { useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import logo from '../../views/images/auctionlogo.png';
import { Drawer } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
const Header=()=>{
    const [visible,setVisible]=useState(false);
    return (<>
    
        <header>
              <div className="flex flex-row flex-justify-sa">
                  <div className="logo">
                      <img src={logo}/>
                  </div>
                  <div className="menu-bar">
                      <ul>
                          <li><Link to='/'><i className="fa fa-home"></i> Home</Link></li>
                          <li><a href="#"><i className="fab fa-product-hunt"></i> Product</a></li>
                          <li><Link to='/login'><i class="fas fa-sign-in-alt"></i> Login/Signup</Link></li>
                      </ul>
                  </div>
                  <div className="menu-icon" onClick={()=>setVisible(true)}>
                  <i class="fas fa-bars"></i>
                  </div>
              </div>
              <Drawer
          title="Nav bar"
          placement={'right'}
          closable={true}
          onClose={()=>setVisible(false)}
          visible={visible}
          closeIcon={<CloseOutlined />}
        >
          <ul className="drawer">
          <Link to='/'><li><i className="fa fa-home"></i> Home</li></Link>
                          <Link to='/product'>
                          <li><i className="fab fa-product-hunt"></i> Product</li>
                          </Link>
                          <Link to='/login'>
                          <li><i class="fas fa-sign-in-alt"></i> Login/Signup</li>
                          </Link>
                      </ul>
        </Drawer>
        </header>

    </>)
}
export default Header;