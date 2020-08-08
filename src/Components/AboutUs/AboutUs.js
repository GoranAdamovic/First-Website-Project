import React from 'react';
import './AboutUs.css';

const AboutUs = (props) => (
	<main id='main'>
		{/* ------------- SECTION A ------------- */}

		<section className='section-about'>
			<div className='background-about-div'>
				<div className='background-about'></div>
				<div className='about-wrapper'>
					<h1>
						<span className='about-first-letter'>O</span>nama
					</h1>
					<p>WE’RE EASY TO GET IN TOUCH WITH</p>
				</div>
			</div>
		</section>
		{/* ------------- SECTION B ------------- */}

		<section className='section-about2'>
			<div className='upper-div'>
				<div className='left-side'>
					<div className='left-side-wrapper'>
						<div className='left-side-wrapper-h1'>
							<h1>O restoranu</h1>
							<h1>Ćevabdžinica Savčić</h1>
						</div>
						<p>
							Od samog nastanka ideje, znali smo da postoje određeni principi na
							osnovu kojih ćemo graditi svoj restoran. Obaveza je postala još
							veća kada je prste umešao boemski duh Gardoša. Nismo imali drugog
							izbora. Princip je iz principa morao da postane mesto od koga će
							se svaki gost opraštati sa osmehom i kome će se rado vraćati. Zato
							smo u jedinstveno iskustvo spojili ukusnu hranu u kojoj i sami
							uživamo, najbolja vina koja mogu da oboje bilo koji dan i noći
							ispunjene muzikom i pozitivnom energijom. Naravno, najsrećniji smo
							kada je Vaše raspoloženje sjajno baš zbog Principa.
						</p>
					</div>
				</div>
				<div className='right-side'>
					<div className='right-side-wrapper'>
						<div className='right-side-video'>
							<iframe
								width='560'
								height='315'
								src='https://www.youtube.com/embed/7ZVAhW26aFM'
								frameBorder='0'
								allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
			<div className='lower-div'>
				<div className='achievements-div'>
					<ul>
						<li className='achievement'>
							<div className='achievement1-div'>
								<div className='achievement1-img'></div>
								<div className='achievement1-text'>
									<h1>HACCP</h1>
									<p>
										Sertifikovani prema najvišim principima HCCP-a, što
										predstavlja visoku higijenu ugostiteljskog objekta i
										prehrambenih proizvoda.
									</p>
								</div>
							</div>
						</li>
						<li className='achievement'>
							<div className='achievement1-div'>
								<div className='achievement1-img'></div>
								<div className='achievement1-text'>
									<h1>HACCP</h1>
									<p>
										Sertifikovani prema najvišim principima HCCP-a, što
										predstavlja visoku higijenu ugostiteljskog objekta i
										prehrambenih proizvoda.
									</p>
								</div>
							</div>
						</li>

						<li className='achievement'>
							<div className='achievement1-div'>
								<div className='achievement1-img'></div>
								<div className='achievement1-text'>
									<h1>HACCP</h1>
									<p>
										Sertifikovani prema najvišim principima HCCP-a, što
										predstavlja visoku higijenu ugostiteljskog objekta i
										prehrambenih proizvoda.
									</p>
								</div>
							</div>
						</li>
						<li className='achievement'>
							<div className='achievement1-div'>
								<div className='achievement1-img'></div>
								<div className='achievement1-text'>
									<h1>HACCP</h1>
									<p>
										Sertifikovani prema najvišim principima HCCP-a, što
										predstavlja visoku higijenu ugostiteljskog objekta i
										prehrambenih proizvoda.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</main>
);

export default AboutUs;
