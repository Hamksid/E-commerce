import React from 'react'
import myFace from './Svg/logo-facebook.svg'
import myTwi from './Svg/logo-twitter.svg'
import myLink from './Svg/logo-linkedin.svg'
import myGit from './Svg/logo-github.svg'
import myMap from './Svg/location.svg'
import myPhone from './Svg/phone-portrait.svg'
import myMail from './Svg/mail.svg'

const Footer = () => {
    return (
        <div id="footer">
            <div class="footer-left">

                <h3>Addy's <span>Delight</span></h3>

                <p class="footer-links">
                    <a href="#" class="link-1">Home</a>

                    <a href="#">Blog</a>

                    <a href="#">Pricing</a>

                    <a href="#">About</a>

                    <a href="#">Faq</a>

                    <a href="#">Contact</a>
                </p>

                <p class="footer-company-name">Company Name © 2015</p>
            </div>

            <div class="footer-center">
                <div>
                    <img src={myMap} style={{width:"39px",height:"39px"}}/>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div>
                <div>
                    <img src={myPhone} style={{width:"29px",height:"29px"}} />
                    <p>+1.555.555.5555</p>
                </div>
                <div>
                    <img src={myMail} style={{width:"29px",height:"29px"}} />
                    <p><a href="#">support@company.com</a></p>
                </div>
            </div>

            <div class="footer Right">

                <p class="footer-company-about">
                    <span>About the company</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div class="footer-icons">

                    <a href="#"><img src={myFace} style={{width:"35px",height:"35px"}} /></a>
                    <a href="#"><img src={myTwi} style={{width:"35px",height:"35px"}} /></a>
                    <a href="#"><img src={myLink} style={{width:"35px",height:"35px"}} /></a>
                    <a href="#"><img src={myGit} style={{width:"35px",height:"35px"}} /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer