import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='foote-content'>
                <div className='footer-left'>
                    <img src={assets.logo} alt='footer Logo' className='footer-logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, erat vel condimentum congue, velit nunc faucibus neque, vel tristique ipsum velit vel odio.</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt='facebook' />
                        <img src={assets.linkedin_icon} alt='linkedIn' />
                        <img src={assets.twitter_icon} alt='X' />

                    </div>
                </div>
                <div className='footer-center'>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+2222222232</li>
                        <li>test@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='copyright'>Copyright © 2025 Food Del. All rights reserved.</p>
        </div>
    )
}

export default Footer