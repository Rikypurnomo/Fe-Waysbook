import React from 'react';
import { Form } from 'react-bootstrap';
import instagram from '../assets/instagram.png'
import { Fade } from 'react-awesome-reveal';
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import logoNav from '../assets/logoNav.png'
import icond from "../assets/icons8.png"
import jnt from "../assets/jnt.png"
import jne from "../assets/jne.jpeg"
import pos from "../assets/pos.jpeg"
import tiki from "../assets/tiki.png"
import ninja from "../assets/ninja.jpeg"
import gosend from "../assets/gosend.png"
import parcel from "../assets/parcel.png"
import anter from "../assets/anter.png"
import idx from "../assets/idex.jpeg"
import cargo from "../assets/cargo.jpeg"

const Footer = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFF8DC',
            // padding: '20px',
            
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <div className=''>
                    <div className='mb-2'>
                        <span className='fw-bold me-2 ' style={{letterSpacing:"5px"}}>Join Us On </span>
                        
                    </div>
                    <Fade style={{animationDuration: "5s", animationDelay:"", animationIterationCount:"infinite"}} direction="bottom-left" triggerOnce >
                    <h1 className='fw-bold' style={{color:"orange"}}>Weysbook</h1>
                    
                    </Fade>
                    <Fade style={{animationDuration: "5s",animationDelay:'', animationIterationCount:"infinite"}} direction="top-right" triggerOnce >
                    <h2 className='fw-bold' style={{color:"coral"}}>Store</h2>
                    </Fade>

                    <Fade style={{animationDelay:"5s",animationDuration:"16s", animationIterationCount:"infinite"}} direction="up" triggerOnce >
                    <p >waysbook Store</p>
                    </Fade>
                    <Fade style={{animationDuration:"5s"}} direction="up" triggerOnce >
                    <p> adalah toko buku online dengan berbagai pilihan buku berkualitas dan terlengkap.</p>
                    </Fade>

                    

                </div>
                <img style={{ position: "absolute", marginTop: "-50px", marginLeft: "auto", marginRight: "auto" }} src={logoNav} alt='' />
                <div style={{marginRight:"30px"}}>
                    <div>
                        <p className='fw-bold' style={{color:"red"}}>NEED HELP? </p>
                    </div>
                    <div className='d-flex justify-content-between' style={{ marginTop: '20px', width: "12%" }}>
                    <h5 style={{ color: 'black', fontWeight: 'bold', marginRight: '1rem' }}>Contact Us</h5>
                    <h5 style={{ color: 'black', fontWeight: 'bold', marginLeft: '5rem' }}>General Inquiries</h5>
                    </div>

                    <div className='d-flex'>
                        <p className='mx-1' style={{marginRight:"7rem"}}>+6285252525252</p>
                        <p style={{marginLeft:"2rem"}}>Waysbook@gmail.com</p>
                    </div>
                    <br/>
                    <h1 style={{fontSize:"20px"}}>Pengiriman</h1>
                    <img style={{width:"50px"}} className=' img-fluid' src={jne} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={jnt} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={pos} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={tiki} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={ninja} alt='' />
                    <div>
                    <img style={{width:"50px"}} className=' img-fluid' src={gosend} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={parcel} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={anter} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={idx} alt='' />
                    <img style={{width:"50px"}} className=' img-fluid' src={cargo} alt='' />
                    </div>

                </div>
                <div style={{marginLeft:"100px"}}>
                    <Form.Group className="mb-3 w-100" >
                        <Form.Label className='fw-bold'>Connect With Us</Form.Label>
                        <div className=''>
                    <div className='d-flex ' style={{ width: "14rem" }}>
                    <div style={{ width: "30%" }}>
                        <a target="_blank" href="https://www.instagram.com">
                        <img className='w-100  pe-2' src={instagram} alt='' />
                        </a>
                        </div>
                        <div style={{ width: "30%" }}>
                        <a href="https://www.facebook.com">
                        <img className='w-100  pe-2' src={facebook} alt='' />
                        </a>
                        </div>

                        <div style={{ width: "30%" }}>
                        <a href="https://www.twitter.com">
                        <img className='w-100  pe-2' src={twitter} alt='' />
                        </a>
                        </div>
                        <div style={{ width: "30%" }}>
                        <a href="https://www.instagram.com">
                        <img className='w-100  pe-2' src={icond} alt='' />
                        </a>
                        </div>
                    </div>
                </div>
                    </Form.Group>
                    <h5 className='fw-bold' style={{ fontWeight: 'bold', marginBottom: '10px' }}>Website Feedback</h5>
                    <div>
                    <h5 className='fw-bold'>Jam Pelayanan</h5>
                    <p>Senin - Jumat pukul 08.00 - 17.00 WIB</p>
                    <p>(Pesan Sabtu/Mingu akan diproses Hari Senin)</p>
                    </div>
                    
                </div>
            </div>
        
            <div style={{ marginTop: '20px', color: '#333', fontSize: '14px' }}>
                © {new Date().getFullYear()} Waysbook. All Rights Reserved.
            </div>
        </div>
        
    );
}

export default Footer;