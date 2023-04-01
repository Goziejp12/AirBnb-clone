import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='footer-left'>
                <span>© 2023 Airbnb, Inc.</span>
                <span>·</span>
                <span className='text'>Terms</span>
                <span>·</span>
                <span className='text'>Sitemap</span>
                <span>·</span>
                <div className='text text-img'>
                    <span>Your Privacy Choices</span>
                    <img src='./images/tick.png'/>
                </div>
            </div>
            
            <div className='footer-right'>
                <img src='./images/globe-solid.svg' className='globe'/>
                <span className='text'>English (US)</span>
                <span className='usd'>$</span>
                <span className='text'>USD</span>
                <img src='./images/square-facebook.svg' className='socials' />
                <img src='./images/square-twitter.svg' className='socials' />
                <img src='./images/square-instagram.svg' className='socials' />
            </div>
        </footer>
    )
}
