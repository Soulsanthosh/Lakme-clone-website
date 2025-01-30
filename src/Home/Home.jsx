import React from 'react'
import "./Home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Home() {


                  

    //FIRST CAROUSEL//

    const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, };

    //SECOND CAROUSEL//

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings1: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings1: {
                    slidesToShow: 2,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings1: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                },
            },],
    };
    function newarrivals() {
        document.getElementById("scp1").style.display = 'block'
        document.getElementById("newarrivals").style.backgroundColor = 'rgb(187, 166, 48)'
        document.getElementById('scp2').style.display = 'none'
        document.getElementById('bestsellers').style.backgroundColor = 'white'
    }
    function bestsellers() {
        document.getElementById("scp1").style.display = 'none'
        document.getElementById("newarrivals").style.backgroundColor = 'white'
        document.getElementById('scp2').style.display = 'block'
        document.getElementById('bestsellers').style.backgroundColor = 'rgb(187, 166, 48)'

    }


    //THIRD CAROUSEL//

    const settings3 = { dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 2, };


    //FOURTH CAROUSEL//

    const settings4 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings4: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings4: {
                    slidesToShow: 2,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings4: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                },
            },],
    };

    //FIFTH CAROUSEL//

    const settings5 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings5: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings5: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings5: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },],
    };


    // SEVENTH CAROUSEL//


    const settings7 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings7: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings7: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings7: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },],
    };

    return (
        <div>

            <div className='Home-img'>

                <img src="./Home Images/1c.avif" alt="" />
                <img src="./Home Images/2c.avif" alt="" />
                <Link to='/Face'><img src="./Home Images/3c.webp" alt="" /></Link>
                <Link to='/Lips'><img src="./Home Images/4c.avif" alt="" /></Link>
                <Link to='/Eyes'><img src="./Home Images/5c.avif" alt="" /></Link>
                <Link to='/Skincare'><img src="./Home Images/6c.avif" alt="" /></Link>
                <Link to='/Nails'><img src="./Home Images/7c.webp" alt="" /></Link>

            </div>

            <div className='Home-tex'>

                <p style={{ marginLeft: '0px',cursor:'pointer' }}>Minis Corner</p>
                <p style={{ marginLeft: '10px',cursor:'pointer' }}>Sale</p>
                <p style={{ marginLeft: '40px',cursor:'pointer' }}>Face</p>
                <p style={{ marginLeft: '45px',cursor:'pointer' }}>Lips</p>
                <p style={{ marginLeft: '40px',cursor:'pointer' }}>Eyes</p>
                <p style={{ marginLeft: '40px',cursor:'pointer' }}>Skin</p>
                <p style={{ marginLeft: '40px',cursor:'pointer' }}>Nails</p>

            </div>


            {/* FIRST CAROUSEL  */}


            <div className="Home-carousel-container">
                <Slider {...settings}>
                    <div> <img src="./Home Images/b1.webp" alt="" /> </div>
                    <div> <img src="./Home Images/b2.webp" alt="" /> </div>
                    <div> <img src="./Home Images/b3.webp" alt="" /> </div>

                </Slider> </div>


            <div class="not">

                <div className="line"></div><div>TRENDING NOW</div><div className="line"></div>

            </div>

            <center><p>Your favourite Lakme makeup and skin care</p></center>


            <div className='Home-p2'><p id='newarrivals' onClick={newarrivals} style={{cursor:'pointer'}} >New Arrivals</p><p id='bestsellers' onClick={bestsellers} style={{cursor:'pointer'}}>Bestsellers</p></div>




            {/* SECOND CAROUSEL  */}

            {/* PART 01 */}

            <div id='scp1'>


                <div className="Home-carousel-container1">
                    <Slider {...settings1}>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m1.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m2.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m3.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m4.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m5.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m6.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m7.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/m8.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                    </Slider> </div>

            </div>


            {/* PART 02  */}


            <div id='scp2' style={{ display: 'none' }}>

                <div className="Home-carousel-container1">
                    <Slider {...settings1}>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n1.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n2.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n3.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n4.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n5.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n6.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n7.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                        <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                            <img style={{ height: '300px', width: '300px' }} src="./Home Images/n8.webp" alt="" />

                            <div className="Home-box2">
                                <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                                <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                                <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                                <center><button className="Btn">VIEW SHADES</button></center>

                            </div>

                        </div></div>
                    </Slider> </div>


            </div>


            <center><div className='Home-p3'> <p style={{cursor:'pointer'}}>View All Products</p></div></center>


            <div style={{ background: 'black', height: '100px', widows: '100%' }}>


                <center><p style={{ color: "#e4d00a", fontSize: '30px', marginTop: "10px" }}>Ultimate Definition for Every you</p></center>

                <center><p style={{ color: "#e4d00a", fontSize: '20px', marginBottom: '10px' }}>Scan your face & know your numbers with DefineU by Lakmē</p></center>

            </div>



            {/* //THIRD CAROUSEL// */}


            <div className="Home-carousel-container3">
                <Slider {...settings3}>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q1.webp" alt="" /> </div>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q2.webp" alt="" /> </div>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q3.webp" alt="" /> </div>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q1.webp" alt="" /> </div>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q2.webp" alt="" /> </div>
                    <div> <img style={{ height: '600px', width: "350px", marginLeft: '100px', borderRadius: '28px' }} src="./Home Images/q3.webp" alt="" /> </div>

                </Slider> </div>

            <div class="not">

                <div className="line"></div><div>UNVEIL THE POWER OF ULTIMATE FACE DEFINITION</div><div className="line"></div>

            </div>


            {/* FOURTH CAROUSEL  */}

            <div className="Home-carousel-container3">
                <Slider {...settings4}>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/w1.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/w2.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/w3.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/w4.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>




                </Slider> </div>


            <center><div className='Home-p4' style={{cursor:'pointer'}}> <p>View All Products</p></div></center>



            <img style={{ height: '300px', width: '100%' }} src="./Home Images/e1.webp" alt="" />



            <div class="not">

                <div className="line"></div><div>SHOP BY CATEGORY</div><div className="line"></div>

            </div>

            <center><p>Glam essentials for everyone</p></center>


            {/* FIFTH CAROUSEL */}


            <div className="Home-carousel-container3">
                <Slider {...settings5}>
                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r1.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>ACE THE BASE</h3>
                        </div>

                    </div></div>


                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r2.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>SHOWSTOPPING SKIN</h3>
                        </div>

                    </div></div>

                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r3.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>POUT TO CART</h3>
                        </div>

                    </div></div>

                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r4.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>NAIL IT LIKE A PRO</h3>
                        </div>

                    </div></div>

                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r5.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>Lakme VitC Superglow</h3>
                        </div>

                    </div></div>

                    <div className="box"><div class="Home-box3">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/r6.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>Lakme VitC Superglow</h3>
                        </div>

                    </div></div>


                </Slider> </div>


            <div class="not">

                <div className="line"></div><div>TOP 10 PRODUCTS</div><div className="line"></div>

            </div>

            <center><p>Your favorite Lakmē Make-up and Skin Care.</p></center>



            {/* SIXTH CAROUSEL  */}






            <div className="Home-carousel-container1">
                <Slider {...settings1}>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t1.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t2.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t3.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t4.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t5.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t6.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t7.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                    <div className="box"><div style={{ marginLeft: '25px' }} className="Home-box">

                        <img style={{ height: '300px', width: '300px' }} src="./Home Images/t8.webp" alt="" />

                        <div className="Home-box2">
                            <h2 style={{ color: 'white', marginLeft: '10px' }}>Lakme VitC Superglow Skin Perfecting tint</h2>

                            <h1 style={{ color: 'white', marginLeft: '10px' }}>₹500 <del style={{ color: 'red' }} >₹1000</del> </h1>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >Save ₹500 </h5>

                            <h5 style={{ color: 'grey', marginLeft: '10px' }} >12 Shades Available </h5>

                            <center><button className="Btn">VIEW SHADES</button></center>

                        </div>

                    </div></div>
                </Slider> </div>

            <center><div className='Home-p3' style={{cursor:'pointer'}}> <p>View All Products</p></div></center>


            <img style={{ height: '500px', width: '100%' }} src="./Home Images/y1.webp" alt="" />



            <div class="not">

                <div className="line"></div><div>You'll Love The Skin You're In</div><div className="line"></div>

            </div>

            <center><p>Essentials that care for your skin</p></center>



            {/* SEVENTH CAROUSEL */}


            <div className="Home-carousel-container3">
                <Slider {...settings7}>
                    <div className="box"><div style={{ backgroundColor: '#a52a2a' }} class="Home-box7">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/u1.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>ACE THE BASE</h3>
                        </div>

                    </div></div>


                    <div className="box"><div style={{ backgroundColor: '#a9a9a9' }} class="Home-box7">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/u2.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>SHOWSTOPPING SKIN</h3>
                        </div>

                    </div></div>

                    <div className="box"><div style={{ backgroundColor: '#008080' }} class="Home-box7">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/u3.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>POUT TO CART</h3>
                        </div>

                    </div></div>

                    <div className="box"><div style={{ backgroundColor: '#fcc200' }} class="Home-box7">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/u4.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>NAIL IT LIKE A PRO</h3>
                        </div>

                    </div></div>

                    <div className="box"><div style={{ backgroundColor: '#8a2be2' }} class="Home-box7">

                        <img style={{ height: '350px', width: '300px' }} src="./Home Images/u5.webp" alt="" />

                        <div class="Home-box2">
                            <h3 style={{ color: ' aliceblue', marginLeft: '50px', marginTop: '10px' }}>Lakme VitC Superglow</h3>
                        </div>

                    </div></div>



                </Slider> </div>


            <div class="not">

                <div className="line"></div><div>Join The Club</div><div className="line"></div>

            </div>

            <center><p>India’s most loved beauty brand</p></center>



            <center><a style={{textDecoration:'none'}} href="."><button class="button1">
                Share Your Look
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button></a></center>




            <center><p>Mention <span style={{ color: '#a52a2a' }}> @Lakme_India</span> to share reels</p></center>

            <Footer/>
        </div >
    )
}
