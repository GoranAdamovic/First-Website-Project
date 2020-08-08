import React from 'react';
import './SideDrawer.css';
import '../Toolbar/Toolbar.js';

const SideDrawer = (props) => {
	let drawerClass = 'side-drawer';
	if (props.show) {
		drawerClass = 'side-drawer open';
	}
	return (
		<nav className={drawerClass}>
			<div className='side-drawer-menu'>
				<ul>
					<li>
						<a href='/'>Početna</a>
					</li>
					<li>
						<a href='/o-nama'>O nama</a>
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
				</ul>
				<div className='side-drawer-info'>
					<p>Adresa:&nbsp;Kralja Milutina 31, Beograd</p>
					<p>Telefon:&nbsp;011 3640661</p>
					<div className='social-media'>
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
				</div>
			</div>
		</nav>
	);
};

export default SideDrawer;
