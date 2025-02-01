import React, { useState } from 'react';
import '../../home/home.js'
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules';  // Import Navigation and Pagination from modules
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom'
import sem1 from '../../../images/sem1.jpg'
import sem2 from '../../../images/sem2.webp'
import sem3 from '../../../images/sem3.jpeg'
import sem4 from '../../../images/sem4.jpeg'
import sem5 from '../../../images/sem5.jpeg'
import sem6 from '../../../images/sem6.jpg'
import sem7 from '../../../images/sem7.jpeg'
import sem8 from '../../../images/sem8.jpeg'
import sem10 from '../../../images/sem10.jpg'
import sem11 from '../../../images/sem11.jpg'
import sem12 from '../../../images/sem12.webp'
import s1 from '../../../images/s1.jpg'
import s2 from '../../../images/s2.jpg'
import s3 from '../../../images/s3.jpg'
import s4 from '../../../images/s4.jpg'
import s5 from '../../../images/s5.jpg'
import s6 from '../../../images/s6.jpg'
import s7 from '../../../images/s7.jpg'
import g5 from '../../../images/g5.jpg'
import a5 from '../../../images/a5.jpg'
import a6 from '../../../images/a6.jpg'
import a2 from '../../../images/a2.jpg'
import Navbar from '../../navbar/navbar.js';
import Sidebar from '../../sidebar/sidebar.js';






const Seminars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu on hamburger click
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
        <style>
            {`

.swip{
 width:650px;
}

.page-main{
    display: grid;
    
    grid-template-columns: auto 1fr;
    gap: 50px;
}
.imgmain{
    display: flex;
    flex-direction: row;
}
.lefts{
    display: flex;
    margin-top:50px;
    flex-direction: column;
}
.hi:hover{
    color: rgb(43, 135, 193);
}
.subr{
    margin-bottom: 200px;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}
    .small{
    position: absolute;
    width: 200px;
    height: 200px;
}

.semimain{
    line-height: 35px;
    margin-left:300px;
}

.semisub{
    width: 349px;
    line-height: 25px;
    padding-top: 15px;
    align-content: center;
    height: 100px;
    border: 1px solid grey;
    text-align: center;
}

.bg{
    width: 800px;
    margin-top: 70px; 
    position: relative; 
    margin-left: 352px;
}

.sm1{
    top: 160px; 
    left: 1010px;
}
.sm2{
    top: 160px; 
    left: 810px;
}
.sm3{
    top: 360px; 
    left: 1010px;
}
.sm4{
    top: 360px; 
    left: 810px;
}
.sm5{
    top: 360px; 
    left: 610px;
}
.sm6{
    top: 360px; 
    left: 410px;
}
.sm7{
    top: 560px; 
    left: 1010px;
}
.sm8{
    top: 560px; 
    left: 810px;
}
.sm9{
    top: 560px; 
    left: 610px;
}
.sm10{ 
    top: 560px; 
    left: 410px;
}
    
.equi{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    line-height: 20px;
    text-align: center;
    margin-top: 35px;
}
.eqp{
    background-color: white; 
    position: absolute; 
    top: 380px; 
    width: 550px; 
    left : 600px;
    padding: 30px;
}

body{
    padding-top: 80px;
    
}
.container {
max-width: 800px;
margin: 0 auto;
}

.card-item {
display: flex;
justify-content: center;
align-items: center;
margin-top:50px;
}

.card-item img {
width: 500px;
object-fit: fill;
height: 350px;
margin: 0;
border-radius: 10px;
}

.shead{
    position: absolute;
        top: 200px;
        padding-left: 10px;
        font-size: 45px;
        font-family: Arial, Helvetica, sans-serif;
        left: 410px;
}
.ohead{
    margin-top: 300px;
    margin-left:330px;

}
@media (max-width:768px) {
    .rights{
        display: none;
    }
    .bg{
        width:250px;
        margin-top: 30px; 
        position: relative; 
        margin-left: 200px;
        
    }
    .sm1{
        top: 150px; 
        left: 518px;
    }
    .sm2{
        top: 150px; 
        left: 418px;
    }
    .sm3{
        top: 250px; 
        left: 518px;
    }
    .sm4{
        top: 250px; 
        left: 418px;
    }
    .sm5{
        top: 250px; 
        left: 318px;
    }
    .sm6{
        top: 250px; 
        left: 218px;
    }
    .sm7{
        top: 350px; 
        left: 518px;
    }
    .sm8{
        top: 350px; 
        left: 418px;
    }
    .sm9{
        top: 350px; 
        left: 318px;
    }
    .sm10{ 
        top: 350px; 
        left: 218px;
    }
    .small{
        position: absolute;
        width: 100px;
        height: 100px;
    }
  
.page-main{
    display: grid;
     margin-left: 10px;
    grid-template-columns: 1fr;
    gap: 10px;
}
    body{
        padding-top: 100px;
    }
    .shead{
        position: absolute;
            top: 180px;
            padding-left: 10px;
            font-size: 19px;
            font-family: Arial, Helvetica, sans-serif;
            left: 225px;
    }
    .ohead{
        margin-top: 220px;
        font-size: 22px;
        margin-left:180px;
    }
    .semimain{
        line-height: 20px;
        width: 100%;
        font-size:16px;
        margin-bottom: 15px;
        margin-left:150px;

    }
    .container {

        max-width: 520px;
        margin: 0;
        margin-top: 40px;
        margin-left: 0;
        }
        
        .card-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width:500px;

        }
        .swip{
 width:500px;
}
        .card-item img {
        width: 650px;
        height: 350px;
        margin: 0;
        object-fit: cover;
        border-radius: 10px;
        }
        
}
@media (max-width:400px) {
    .rights{
        display: none;
    }
    .bg{
        width: 280px;
        margin-top: 0px; 
        position: relative; 
        margin-left: 20px;
        
    }
    .sm1{
        top: 120px; 
        left: 248px;
    }
    .sm2{
        top: 120px; 
        left: 178px;
    }
    .sm3{
        top: 190px; 
        left: 248px;
    }
    .sm4{
        top: 190px; 
        left: 178px;
    }
    .sm5{
        top: 190px; 
        left: 108px;
    }
    .sm6{
        top: 190px; 
        left: 38px;
    }
    .sm7{
        top: 260px; 
        left: 248px;
    }
    .sm8{
        top: 260px; 
        left: 178px;
    }
    .sm9{
        top: 260px; 
        left: 108px;
    }
    .sm10{ 
        top: 260px; 
        left: 38px;
    }
    .small{
        position: absolute;
        width: 70px;
        height: 70px;
    }
  
.page-main{
    display: grid;
     margin-left: 10px;
    grid-template-columns: 1fr;
    gap: 10px;
}
    body{
        padding-top: 100px;
        max-width: 380px;
    }
    .shead{
        position: absolute;
            top: 140px;
            padding-left: 10px;
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;
            left: 35px;
    }
    .ohead{
        margin-top: 100px;
        font-size: 18px;
                margin-left:0px;

    }
    .semimain{
        line-height: 20px;
        width: 280px;
        font-size:13px;
        margin-bottom: 15px;
        margin-left:0px;
    }
    .container {

        max-width: 320px;
        margin: 0;
        margin-top: 40px;
        margin-left: 0;
                border-radius:15px;

        }
        
        .card-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width:300px;
        border-radius:15px;
        }
        .swip{
 width:300px;
}
        .card-item img {
        width: 350px;
        height: 250px;
        margin: 0;
        object-fit: cover;
        border-radius: 10px;
        }
        
}

`}
        </style>
        <Navbar/>

        <div class="page-main">
        
     <Sidebar/>
    
            <div>
                <div>
                <img class="bg" src={sem12}/>
                </div>
                <h1 className='shead'>Chemical Science</h1>
                <div>
                    <img class="small sm1" src={sem5}/>
                </div>
                <div>
                    <img class="small sm2" src={sem2}/>
                </div>
                <div>
                    <img class="small sm3" src={sem3}/>
                </div>
                <div>
                    <img class="small sm4" src={sem11}/>
                </div>
                <div>
                    <img class="small sm5" src={sem4}/>
                </div>
                <div>
                    <img class="small sm6" src={sem6}/>
                </div>
                <div>
                    <img class="small sm7" src={sem7}/>
                </div>
                <div>
                    <img class="small sm8" src={sem8}/>
                </div>
                <div>
                    <img class="small sm9" src={sem10}/>
                </div>
                <div>
                    <img class="small sm10" src={sem1}/>
                </div>
                
                <h1 className='ohead'>Seminars Organized:</h1>
                <ul>
                    <li style={{marginTop: '10px'}} class="semimain">National Seminar On Corrosion In Concrete On 24-25, March, 1990.</li>
                    <li class="semimain">Workshop On Fabrication & Repair Of Low Cost Electrochemical Equipments On 11-14, Sept, 1992.</li>
                    <li class="semimain">Role Of Basic Sciences In Engineering And Technology On 30, Dec, 2011.</li>
                    <li class="semimain">National Seminar On Save Me From 2007 – 2012 (6 Years).</li>
                    <li class="semimain">Student Development Programmes (Smart Student From 2004 – 2015).</li>
                    <li class="semimain">Focus (1996 – 2014)</li>
                    <li class="semimain">International Symposia On Recent Innovations In Engineering Materials On 2017.</li>
                    <li class="semimain">National Seminar On Science & Technology For Better Society On 28, Feb 2022.</li>
                    <li class="semimain">Anusandhan- Program for first year B.Tech students on 29th November 2022, March 2024 (The program will be conducted for every year)</li>
                </ul>
                       

               
          <Swiper className='swip'
            modules={[Navigation, Pagination]}  // Use modules for Navigation and Pagination
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
                <div className='card-item'>
                <img src={s1} alt="Lab Image 1" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='card-item'>
                <img src={s3} alt="Lab Image 1" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='card-item'>
                <img src={s4} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='card-item'>
                <img src={s5} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='card-item'>
                <img src={s2} alt="Lab Image 1" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='card-item'>
                <img src={s6} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='card-item'>
                <img src={s7} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='card-item'>
                <img src={a5} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='card-item'>
                <img src={a6} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-item'>
                <img src={g5} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-item'>
                <img src={a2} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
   
    </div>
 
  )
}

export default Seminars