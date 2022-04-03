import {React} from 'react'
import '../Footer/Footer.css'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import email from '../assets/email.png'
 export const Footer = () => {
  return (
   <footer className='FooterStyles'>
     <div className='DivTitleFooter'>
     <h1 className='FooterTitle'>Buyers</h1>
     <span className='FooterSpanTitle'>© Copyright 2022 TomasJuarez-projects | Todos los derechos reservados | Mar del Plata, Buenos Aires, Argentina.</span>
     </div>
     <ul className='SocialMediaFooter'>
       <li><img alt='img' className='SocialMediaImg' src={instagram}></img></li>
       <li><img alt='img' className='SocialMediaImg' src={facebook}></img></li>
       <li><img alt='img' className='SocialMediaImg' src={email}></img></li>
     </ul>
    
   </footer>
  )
}

