import React from 'react'
import Link  from 'next/link'
import { FaTiktok } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const HeaderTopbar = () => {
    return(	
        <section className="topbar">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-email"></i>weddings@travelerocorp.com</li>
                                <li><i className="fi flaticon-phone-call"></i><a href="https://wa.me/59169203728" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>+591 69203728</a></li>
                                <li><i className="fi flaticon-maps-and-flags"></i>Avenida San Martin, SCZ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="https://www.facebook.com/viajestravelerobo" target="_blank" rel="noopener noreferrer"><FaFacebookF/></Link></li>
                                <li><Link href="https://www.instagram.com/viajestravelero/" target="_blank" rel="noopener noreferrer"><FaInstagram/></Link></li>
                                <li><Link href="https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" target="_blank" rel="noopener noreferrer"><FaYoutube/></Link></li>
                                <li><Link href="https://www.tiktok.com/@viajestravelero?lang=es" target="_blank" rel="noopener noreferrer"><FaTiktok /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopbar;