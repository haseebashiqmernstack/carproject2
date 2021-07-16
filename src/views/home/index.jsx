import './index.css';
import React, { useEffect } from 'react';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import Header from '../../components/header';
import Mercedes from '../images/Mercedes.jpg';
import {Link} from 'react-router-dom';
import { Timer } from '../../components/javaScript/timer';
import Layout from '../../components/layout/layout';
// import timer from '../../components/javaScript/timer';
// import Timer from '../../components/javaScript/timer';
const Home=()=>{
   useEffect(()=>{
    
    // alert(`futureDate ${futurDate} and today ${today}`)
    let endMessage=document.querySelector('.endBiding');
    let title_timer=document.querySelector('.timer-title');
    let _timer=document.querySelector('.timer');
    const countdown= () => {
        let day=document.querySelector('.dayss');
    let hour=document.querySelector('.hourss');
    let min=document.querySelector('.minss');
    let sec=document.querySelector('.secs');
    let futurDate=new Date('25 Jul 2021');
    let today=new Date();
        let date = futurDate - today;
    let days=Math.floor(date / 1000 / 60 / 60 / 24);
    let hours=Math.floor(date / 1000 / 60 / 60) % 24;
    let mins=Math.floor(date / 1000 / 60) % 60;
    let secs=Math.floor(date / 1000) % 60;
    day.innerHTML=days;
    hour.innerHTML=hours;
    min.innerHTML=mins;
    sec.innerHTML=secs;
    }
    // if(futurDate==today)
    // {
    setInterval(countdown,1000);
    // }
    // else
    // {
    //     endMessage.classList.add('endBiding-toggle');
    //           endMessage.classList.remove('endBiding');
    //            title_timer.classList.remove('timer-title');
    //            _timer.classList.remove('timer');
             
    // }
    //    Timer(); 
   },[])
   return (<>
   
    <div className="container">
    {/* <Header/> */}
    <Layout>

        <div className="main-content">
{/* herro sectino */}

<div className="row">
<section className="hero-section flex flex-column flex-justify-center flex-items-center">
   <div className="hero-content flex flex-column flex-justify-center flex-items-center">
   <div className="hero-text">We are globaly company to provide very best vehicle auction</div>
    <div className="hero-btn"><Link to='/signup'>Get Register</Link></div>
   </div>
</section>
</div>

{/* herro section end */}
{/* our partner */}


<div className="row">
    <section className="partner flex flex-column flex-justify-center flex-items-center">
      <div className="partner-title">
          <h1>Our partner</h1>
      </div>
      <div className="partner-img flex flex-row flex-wrap">
          <div><img src="https://image.shutterstock.com/image-photo/image-260nw-652749883.jpg" className="animate__animated animate__zoomIn"/></div>
          <div><img src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-1.svg" className="animate__animated animate__zoomIn"/></div>
          <div><img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/honda-logo-02.png" className="animate__animated animate__zoomIn"/></div>
          <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nissan-logo.svg/1189px-Nissan-logo.svg.png" className="animate__animated animate__zoomIn"/></div>
          <div><img src="https://cdn.worldvectorlogo.com/logos/bmw.svg"/></div>
      </div>
    </section>
</div>


{/* our partner end */}


    {/* product showing */}

       <div className="row">
               <section className="product-car">
         <div className="flex flex-column flex-justify-center flex-items-center">
             <div className="section-title"><h1>New Products For Bid</h1></div>
             </div>      

       <div className="grid grid-product-items">
              
               <div className="item-grid flex flex-column animate__animated animate__zoomIn">
                   <div className="timer-section flex flex-column flex-justify-center flex-items-center">
                       {/* <div className=".endBiding">
                           <h3>Bid is end.</h3>
                       </div> */}
                       <div className="timer-title">
                       <i class="far fa-clock"></i> Remaining Time:
                       </div>
                       <div className="timer flex flex-row">
                       <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="dayss"></div>
                               <span>days</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="hourss"></div>
                               <span>hours</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="minss"></div>
                               <span>mins</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="secs"></div>
                               <span>sec</span>
                           </div>
                       </div>
                   </div>
                   <div className="product-content flex flex-column">

                         <div className="product-img-box">
                         <img src='https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'/>
                        
                         </div>
                         <div className="product-info-box flex flex-column flex-justify-center flex-items-center">
                             <div className="product-details flex flex-row">
                             <div className="p-name"><h5><i class="fa fa-car-side"></i> Name: <span>Ferari</span></h5></div>
                                 <div className="p-bids"><h5><i class="fa fa-gavel"></i> Bids on: <span>5</span></h5></div>
                             </div>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam maxime aliquam voluptatem, cum unde ipsum at et impedit aperiam.</p>
                          <div className="action-btn-group flex flex-row">
                          <button><i class="far fa-eye"></i> View</button>
                          <button><i class="fa fa-gavel"></i> Bid</button>
                          </div>
                          <div className="social-media-btn flex flex-row flex-justify-center flex-items-center">
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-facebook"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-twitter"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-instagram-square"></i></div>
                          </div>
                         </div>

                   </div>
               </div>

               <div className="item-grid flex flex-column animate__animated animate__zoomIn">
               <div className="timer-section flex flex-column flex-justify-center flex-items-center">
                       <div className="timer-title">
                       <i class="far fa-clock"></i> Remaining Time:
                       </div>
                       <div className="timer flex flex-row">
                       <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="dayss"></div>
                               <span>days</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="hourss"></div>
                               <span>hours</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="minss"></div>
                               <span>mins</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="secs"></div>
                               <span>sec</span>
                           </div>
                       </div>
                   </div>
                   <div className="product-content flex flex-column">

                         <div className="product-img-box">
                         <img src={Mercedes}/>
                        
                         </div>
                         <div className="product-info-box flex flex-column flex-justify-center flex-items-center">
                             <div className="product-details flex flex-row">
                             <div className="p-name"><h5><i class="fa fa-car-side"></i> Name: <span>Ferari</span></h5></div>
                                 <div className="p-bids"><h5><i class="fa fa-gavel"></i> Bids on: <span>5</span></h5></div>
                             </div>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam maxime aliquam voluptatem, cum unde ipsum at et impedit aperiam.</p>
                          <div className="action-btn-group flex flex-row">
                          <button><i class="far fa-eye"></i> View</button>
                          <button><i class="fa fa-gavel"></i> Bid</button>
                          </div>
                          <div className="social-media-btn flex flex-row flex-justify-center flex-items-center">
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-facebook"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-twitter"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-instagram-square"></i></div>
                          </div>
                         </div>

                   </div>
               </div>

               <div className="item-grid flex flex-column animate__animated animate__zoomIn">
                   <div className="timer-section flex flex-column flex-justify-center flex-items-center">
                       <div className="timer-title">
                       <i class="far fa-clock"></i> Remaining Time:
                       </div>
                       <div className="timer flex flex-row">
                       <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="dayss"></div>
                               <span>days</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="hourss"></div>
                               <span>hours</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="minss"></div>
                               <span>mins</span>
                           </div>
                           <div className="flex flex-column flex-justifyl-center flex-items-center">
                               <div className="secs"></div>
                               <span>sec</span>
                           </div>
                       </div>
                   </div>
                   <div className="product-content flex flex-column">

                         <div className="product-img-box">
                         <img src='https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'/>
                        
                         </div>
                         <div className="product-info-box flex flex-column flex-justify-center flex-items-center">
                             <div className="product-details flex flex-row">
                                 <div className="p-name"><h5><i class="fa fa-car-side"></i> Name: <span>Ferari</span></h5></div>
                                 <div className="p-bids"><h5><i class="fa fa-gavel"></i> Bids on: <span>5</span></h5></div>
                             </div>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam maxime aliquam voluptatem, cum unde ipsum at et impedit aperiam.</p>
                          <div className="action-btn-group flex flex-row">
                          <button><i class="far fa-eye"></i> View</button>
                          <button><i class="fa fa-gavel"></i> Bid</button>
                          </div>
                          <div className="social-media-btn flex flex-row flex-justify-center flex-items-center">
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-facebook"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-twitter"></i></div>
                              <div className="flex flex-row flex-justify-center flex-items-center"><i class="fab fa-instagram-square"></i></div>
                          </div>
                         </div>

                   </div>
               </div>             

       </div>
       </section>
       </div>
    {/* product showing end */}


        {/* <div className="row">
            <div className="carousel">
                <Carousel autoplay>
                    <div className='carousel-item'>
                          <img src='https://media.istockphoto.com/photos/illustration-of-generic-compact-white-car-front-side-view-picture-id1150931120'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660'/>
                    </div>
                </Carousel>
            </div>
            <div className='section-name'><h1>Product</h1></div>
            <div className="product-auction">
                <div className='product-box'>
                   <div className='img-box'>
                   <img src='https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'/>
                   </div>
                   <div className='product-content'>
                      
                       <div className='inner-content-info'>content info</div>
                       <div className="inner-header">
                           <div>Amount Rs</div>
                           <div>Bids</div>
                           <div>Timer</div>
                       </div>
                       <div className="inner-header">
                           <div>1</div>
                           <div>2</div>
                           <div id='timers'><h3>days <span>06</span></h3> <h3>min <span>4</span></h3> <h3>sec <span>44</span></h3></div>
                       </div>
                   </div>
                </div>
            </div>

            <div className="product-auction">
                <div className='product-box'>
                   <div className='img-box'>
                   <img src='https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'/>
                   </div>
                   <div className='product-content'>
                      
                       <div className='inner-content-info'>content info</div>
                       <div className="inner-header">
                           <div>Amount Rs</div>
                           <div>Bids</div>
                           <div>Timer</div>
                       </div>
                       <div className="inner-header">
                           <div>1</div>
                           <div>2</div>
                           <div id='timers'><h3>days <span>06</span></h3> <h3>min <span>4</span></h3> <h3>sec <span>44</span></h3></div>
                       </div>
                   </div>
                </div>
            </div>
            
            <div className="product-auction">
                <div className='product-box'>
                   <div className='img-box'>
                   <img src='https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png'/>
                   </div>
                   <div className='product-content'>
                      
                       <div className='inner-content-info'>content info</div>
                       <div className="inner-header">
                           <div>Amount Rs</div>
                           <div>Bids</div>
                           <div>Timer</div>
                       </div>
                       <div className="inner-header">
                           <div>1</div>
                           <div>2</div>
                           <div id='timers'><h3>days <span>06</span></h3> <h3>min <span>4</span></h3> <h3>sec <span>44</span></h3></div>
                       </div>
                   </div>
                </div>
            </div>
        </div> */}
        </div>
        </Layout>
    </div>
    </>)
}
export default Home;