import React from 'react';
import './Footer.css';

let Footer = (props) => (
	<section className='section-footer'>
		<div className='footer'>
			<ul>
				<div className='footer-box'>
					<li className='footer-contact'>
						<h1>Kontakt</h1>
						<p>
							Adresa:<br></br>
							Kralja Milutina 31, Beograd
						</p>
						<p>
							Telefon:<br></br>
							<span className='footer-contact-info'>011 3640661</span>
						</p>
						<div className='footer-social-media'>
							<a href='https://www.instagram.com/cevabdzinica_savcic/'>
								<i className='fab fa-instagram'></i>
							</a>
							<a href='https://www.facebook.com/savciccevabdzinica/'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='https://www.google.com/maps/place/Sarajevski+%C4%87evap+%C4%86evabd%C5%BEinica+Sav%C4%8Di%C4%87/@44.804227,20.46673,18z/data=!4m5!3m4!1s0x0:0x3a8a39271df34ef7!8m2!3d44.804227!4d20.46673?hl=sr'>
								<i className='fas fa-map-marker-alt'></i>
							</a>
						</div>
					</li>
				</div>

				<div className='footer-box'>
					<li className='footer-hours'>
						<h1>Radno Vreme</h1>
						<p>
							Ponedeljak-Subota:&nbsp;&nbsp;
							<span className='footer-contact-info'>09:00-22:30</span>
							<br></br>
						</p>
						<p>
							Nedelja:&nbsp;
							<span className='footer-contact-info'>12:00-21:00</span>
						</p>
					</li>
				</div>

				<div className='footer-box'>
					<div className='footer-more'>
						<h1>Stranice</h1>
						<li>
							<a href='/'>Početna</a>
						</li>
						<li>
							<a href='/o-nama'>Onama</a>
						</li>
						<li>
							<a href='/jelovnik'>Jelovnik</a>
						</li>
						<li>
							<a href='/galerija'>Galerija</a>
						</li>
						<li>
							<a href='/kontakt'>Kontakt</a>
						</li>
					</div>
				</div>
			</ul>
			<div className='footer-box-copyright'>
				<p>Copyright &copy; 2020,&nbsp;All Rights Reserved.</p>
			</div>
		</div>
	</section>
);

export default Footer;
