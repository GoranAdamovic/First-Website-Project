import React from 'react';
import '../Homepage/Homepage.css';
import logo from '../Images/logo.png';
import video from '../Homepage/pizzagram-video.mp4';

let Homepage = (props) => (
	<main className='main'>
		{/* SECTION-A */}
		<section id='section-a'>
			<div className='video-div'>
				<video src={video} autoPlay loop muted></video>
			</div>
			<div className='section-a-content'>
				<h1 className='sub-headline'>
					<span className='first-letter'>D</span>obrodošli
				</h1>
				<div className='separator'>
					<div className='line line-left'></div>
					<div className='asterisk'>
						<i className='fas fa-asterisk'></i>
					</div>
					<div className='line line-right'></div>
				</div>
				<div className='img-content'>
					<img className='section-a-logo' src={logo} alt='' />
				</div>
				<div className='headline-description'>
					<div className='separator'>
						<div className='line line-left'></div>
						<div className='asterisk'>
							<i className='fas fa-asterisk'></i>
						</div>
						<div className='line line-right'></div>
					</div>
					<div className='single-animation'>
						<h5>Duh Sarajeva u Beogradu</h5>
						<a className='section-a-button'></a>
					</div>
				</div>
			</div>
		</section>
		{/* SECTION-B */}
		<section id='section-b'>
			<div className='section-b-img'></div>
			<div className='section-b-content-div'>
				<div className='section-b-content'>
					<h1>
						Sarajevski<br></br>recept
					</h1>
					<p>
						Ut culpa pariatur officia officia nulla. Pariatur labore occaecat
						consectetur officia commodo eiusmod sunt duis Lorem ullamco labore
						dolor labore. Nulla magna in consectetur fugiat. Proident non amet
						dolore est cillum sunt culpa proident fugiat non.
					</p>
					<a href='o-nama'>
						<h2>Više O Nama</h2>
					</a>
				</div>
			</div>
		</section>
	</main>
);

export default Homepage;
