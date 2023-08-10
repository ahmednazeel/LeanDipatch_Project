import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/heroMedia.css'
import socialIcon_2 from '../images/image 40.svg'
import socialIcon_3 from '../images/image 39.svg'
import socialIcon_5 from '../images/image 38.svg'
const HeroMediaPage = () => {
  return (
    <div className='hero-media'>
        <div className="hero-page background-primary">
            <Container className="container">
            <div className="hero-content justify-content-center text-align d-flex align-items-center gap-4 text-center">
                <div className="hero-details">
                <p className="c-white fs_3 weight-500 mb-5">
                    Our Privacy Policy
                </p>

                <p className="rounded background-secondary fs_1-8 c-white mt-5">
                We're committed to keeping your data safe
                </p>

                <p className="fs_1-8 c-white">
                    When you use one of our products you trust us with your personal and professional financial information.
                    We help safeguard that data and protect your privacy by using industry-leading technology and practices.
                </p>
                </div>
            </div>
            </Container>
      </div>
      <Container>
      <div className='card-media d-flex justify-content-between align-items-center'>
            <div className='media-item'>
                <h3 className='c-secondary fs_2'>Your Trust in Us</h3>
                <p className='fs-medium c-gray'>
                At Lean Dispatcher, we are deeply committed to maintaining the privacy and security of your data. As a leading Software-as-a-Service (SaaS) provider, we understand the enormous responsibility we have in managing and protecting the sensitive information that you entrust us with.
                </p>
            </div>
            <div className='media-item'>
                <h3 className='c-primary fs_2'>Security Architecture</h3>
                <p className='fs-medium c-gray'>
                Our privacy policy is designed with your safety in mind, reflecting our commitment to keeping your data secure. This policy governs how we collect, use, maintain, and disclose information collected from our users. It covers personal identification information, non-personal identification information, web browser cookies, and how we protect your information.                </p>
            </div>
      </div>
      <div className='card-media d-flex justify-content-between align-items-center'>
            <div className='media-item'>
                <h3 className='c-secondary fs_2'>Your Trust in Us</h3>
                <p className='fs-medium c-gray'>
                Our robust security architecture ensures that your data is securely stored and carefully handled, adhering to the highest industry standards for data protection. We employ state-of-the-art encryption technologies to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, transaction information, and data stored on our site.                </p>
            </div>
            <div className='media-item'>
                <h3 className='c-primary fs_2'>Cybersecurity Measures</h3>
                <p className='fs-medium c-gray'>
                Beyond this, we have comprehensive cybersecurity measures in place to detect and prevent potential threats and breaches. Our systems are continuously monitored and updated to counter emerging threats, ensuring that your data remains safe in an ever-evolving digital landscape.
                </p>
            </div>
      </div>
      <div className='card-media d-flex justify-content-between align-items-center'>
            <div className='media-item'>
                <h3 className='c-secondary fs_2'>Data Usage</h3>
                <p className='fs-medium c-gray'>
                In terms of data usage, your data is used solely to provide and improve our services. We believe in a minimum necessary principle, which means we only collect and process the data we need to deliver our services effectively. We never share, sell or rent your personal data to third parties without your explicit consent. In case we need to work with third-party service providers, we ensure they comply with our stringent data protection standards.                </p>
            </div>
            <div className='media-item'>
                <h3 className='c-primary fs_2'>Strengthening Security</h3>
                <p className='fs-medium c-gray'>
                At Lean Dispatcher, your trust is our top priority. We understand that our services are only as good as the trust you place in us, and we're dedicated to earning and preserving that trust.
                </p>
            </div>
      </div>

      </Container>
      <div className='mt-5 text-center'>
        <p className='c-primary m-0 fs_1-8'>Your privacy matters to us</p>
        <p className='c-secondary fs_1-8'>and we are committed to protect it</p>
        <p className='fs-medium c-gray mb-3'>
        If you have any questions about our privacy practices or if you need assistance with your data, <br/>our dedicated customer support team is always ready to help.
        </p>
      </div>
      <div className='d-flex justify-content-center gap-3 align-items-center mt-5 py-5'>
            <img src={socialIcon_2} width={30}/>
            <img src={socialIcon_3} width={30}/>
            <img src={socialIcon_5} width={30}/>
        </div>
    </div>
  )
}

export default HeroMediaPage