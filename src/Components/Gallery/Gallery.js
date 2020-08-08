import React from 'react';
import './Gallery.css';
import galleryImage1 from '../Images/Gallery/1.jpg';
import galleryImage2 from '../Images/Gallery/2.jpg';
import galleryImage3 from '../Images/Gallery/3.jpg';
import galleryImage4 from '../Images/Gallery/4.jpg';
import galleryImage5 from '../Images/Gallery/5.jpg';
import galleryImage6 from '../Images/Gallery/6.jpg';
import galleryImage7 from '../Images/Gallery/7.jpg';
import galleryImage8 from '../Images/Gallery/8.jpg';
import galleryImage9 from '../Images/Gallery/9.jpg';
import galleryImage10 from '../Images/Gallery/10.jpg';
import galleryImage11 from '../Images/Gallery/11.jpg';
import galleryImage12 from '../Images/Gallery/12.jpg';
import galleryImage13 from '../Images/Gallery/13.jpg';
import galleryImage14 from '../Images/Gallery/14.jpg';
import galleryImage15 from '../Images/Gallery/15.jpg';
import galleryImage16 from '../Images/Gallery/16.jpg';
import galleryImage17 from '../Images/Gallery/17.jpg';
import galleryImage18 from '../Images/Gallery/18.jpg';
import galleryImage19 from '../Images/Gallery/19.jpg';
import galleryImage20 from '../Images/Gallery/20.jpg';
import galleryImage21 from '../Images/Gallery/21.jpg';
import galleryImage22 from '../Images/Gallery/22.jpg';
import galleryImage23 from '../Images/Gallery/23.jpg';
import galleryImage24 from '../Images/Gallery/24.jpg';
import galleryImage25 from '../Images/Gallery/25.jpg';

let Gallery = (props) => (
	<main id='main'>
		<section className='section-gallery'>
			<div className='background-gallery-div'>
				<div className='background-gallery'></div>
				<div className='gallery-wrapper'>
					<h1>Galerija</h1>
					<p>WE’RE EASY TO GET IN TOUCH WITH</p>
				</div>
			</div>
		</section>

		<section className='section-gallery2'>
			<div className='img-gallery-div'>
				<div className='single-img'>
					<a href={galleryImage1} data-lightbox='mygallery'>
						<img src={galleryImage1} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage2}>
						<img src={galleryImage2} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage3}>
						<img src={galleryImage3} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage4}>
						<img src={galleryImage4} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage5}>
						<img src={galleryImage5} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage6}>
						<img src={galleryImage6} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage7}>
						<img src={galleryImage7} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage8}>
						<img src={galleryImage8} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage9}>
						<img src={galleryImage9} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage10}>
						<img src={galleryImage10} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage11}>
						<img src={galleryImage11} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage12}>
						<img src={galleryImage12} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage13}>
						<img src={galleryImage13} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage14}>
						<img src={galleryImage14} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage15}>
						<img src={galleryImage15} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage16}>
						<img src={galleryImage16} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage17}>
						<img src={galleryImage17} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage18}>
						<img src={galleryImage18} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage19}>
						<img src={galleryImage19} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage20}>
						<img src={galleryImage20} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage21}>
						<img src={galleryImage21} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage22}>
						<img src={galleryImage22} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage23}>
						<img src={galleryImage23} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage24}>
						<img src={galleryImage24} />
					</a>
				</div>

				<div className='single-img'>
					<a href={galleryImage25}>
						<img src={galleryImage25} />
					</a>
				</div>
			</div>
		</section>
	</main>
);

export default Gallery;
