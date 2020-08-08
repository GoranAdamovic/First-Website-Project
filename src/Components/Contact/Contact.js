import React from 'react';
import './Contact.css';

const Contact = (props) => (
	<main id='main-contact'>
		<section className='section-contact'>
			<div className='background-contact-div'>
				<div className='background-contact'></div>
				<div className='contact-wrapper'>
					<h1>KONTAKT</h1>
					<p>WE’RE EASY TO GET IN TOUCH WITH</p>
				</div>
			</div>
		</section>
		<section className='section-contact2'>
			<div className='section-content-left'>
				<div className='section-content-left-wrapped'>
					{/* info1 */}
					<div className='section-content-left-wrapped-info1'>
						<h1>Adresa</h1>
						<ul>
							<li>
								<p>Kralja Milutina 31, Beograd</p>
							</li>
						</ul>
					</div>
					{/* info2 */}
					<div className='section-content-left-wrapped-info2'>
						<h1>Telefon</h1>
						<ul>
							<li>
								<p>011 3640661</p>
							</li>
						</ul>
					</div>
					{/* info3 */}
					<div className='section-content-left-wrapped-info2'>
						<h1>EMAIL</h1>
						<ul>
							<li>
								<p>savcic@gmail.com</p>
							</li>
						</ul>
					</div>
					{/* info4 */}
					<div className='section-content-left-wrapped-info2'>
						<h1>Dostava</h1>
						<ul>
							<li>
								<p>011 3640661</p>
							</li>
						</ul>
					</div>
					{/* info5 */}
					<div className='section-content-left-wrapped-info3'>
						<h1>Radno vreme</h1>
						<ul>
							<li>
								<p>
									<span className='day'>Ponedeljak&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Utorak&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Sreda&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Četvrtak&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Petak&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Subota&nbsp;&nbsp;</span>
									<span className='time'>09:00-22:30</span>
								</p>
								<p>
									<span className='day'>Nedelja&nbsp;&nbsp;</span>
									<span className='time'>12:00-21:00</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='section-content-right'>
				<div className='section-content-right-wrapped'>
					<h1>Pošaljite nam poruku</h1>
					{/* Name */}
					<div className='form'>
						<input type='text' name='name' autoComplete='off' required></input>
						<label htmlFor='name' className='label-name'>
							<span className='content-name'>Ime</span>
						</label>
					</div>
					{/* Email */}
					<div className='form'>
						<input type='text' name='name' autoComplete='off' required></input>
						<label htmlFor='name' className='label-name'>
							<span className='content-name'>Email</span>
						</label>
					</div>
					{/* Subject */}
					<div className='form'>
						<input type='text' name='name' autoComplete='off' required></input>
						<label htmlFor='name' className='label-name'>
							<span className='content-name'>Tema</span>
						</label>
					</div>
					{/* Message */}
					<div className='form form-message'>
						<textarea
							type='text'
							name='name'
							autoComplete='off'
							required
						></textarea>
						<label htmlFor='name' className='label-name-message'>
							<span className='content-name'>Poruka</span>
						</label>
					</div>
					{/* SUBMIT */}
					<div className='send'>Pošalji </div>
				</div>
			</div>
		</section>

		{/* MAP */}
		<section className='section-contact3'>
			<div className='map'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1415.4254073328664!2d20.4665878429223!3d44.804228903075995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a8a39271df34ef7!2zU2FyYWpldnNraSDEh2V2YXAgxIZldmFiZMW-aW5pY2EgU2F2xI1pxIc!5e0!3m2!1ssr!2srs!4v1593791740027!5m2!1ssr!2srs'
					width='100%'
					height='100%'
				></iframe>
			</div>
		</section>
	</main>
);

export default Contact;
