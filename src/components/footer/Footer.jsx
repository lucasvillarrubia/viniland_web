import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { FooterUI, InfoFooter, LinksFooter, LogosFooter, RedesFooter, DireccionFooter, ExtrasFooter } from './FooterStyles'

const Footer = () => {
  return (
        <FooterUI>
                <InfoFooter>
                        <LinksFooter>
                                <LogosFooter>
                                        <img src="./logo.png" alt="logo_empresa" />
                                        <p>VLAND</p>
                                </LogosFooter>
                                <RedesFooter>
                                        <a href='https://www.google.com.ar/'><BsWhatsapp /></a>
                                        <a href='https://www.google.com.ar/'><BsInstagram /></a>
                                        <a href='https://www.google.com.ar/'><BsFacebook /></a>
                                        <a href='https://www.google.com.ar/'><BsLinkedin /></a>
                                </RedesFooter>
                        </LinksFooter>
                        <DireccionFooter>
                                <p><FaLocationArrow /> Antezana 247, Ciudad de Buenos Aires, Argentina</p>
                                <p><FaPhone /> 03-03-456 (nanananananana)</p>
                                <p><FaEnvelope /> villar.lucase@gmail.com</p>
                        </DireccionFooter>
                </InfoFooter>
                <ExtrasFooter>
                        <p>2023 ViniLand ® - All Rights Reserved</p>
                        <a href='https://www.google.com.ar/'>Términos y Condiciones</a> | <a href='https://www.google.com.ar/'>Política de Privacidad</a> | <a href='https://www.google.com.ar/'>Reportar un problema</a>
                </ExtrasFooter>
        </FooterUI>
  )
}

export default Footer