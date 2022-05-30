import React from 'react'
import './Footer.css'
// import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        {/* <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> */}
                        <div>
                            <h4>123 Acme St.</h4>
                            <h4>New York, NY</h4>
                        </div>
                    </div>
                    <div className='phone'>
              <h4>
                {/* <FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> */}
                1-800-123-1234</h4>
                    </div>
                    <div className='email'>
              <h4>
                {/* <FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> */}
                health@everywhen.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Us</h4>
                    <p>Everywhen is a mental health assessment and tracking application.
            It allows users to take a mental health assessment and save the
            results for their review and reflection. This in turn allows them
            to keep track of their mental health progress and coping strategies.</p>
                    {/* <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Footer