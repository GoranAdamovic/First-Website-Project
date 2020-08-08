import React from 'react';
import './Menu.css';

const Menu = (props) => (
	<main id='main'>
		<section className='section-menu'>
			<div className='background-menu-div'>
				<div className='background-menu'></div>
				<div className='menu-wrapper'>
					<h1>Jelovnik</h1>
					<p>WE’RE EASY TO GET IN TOUCH WITH</p>
				</div>
			</div>
		</section>

		<section className='section-menu2'>
			<div className='background-menu-2-div'>
				<div className='background-menu-2'></div>
				<div className='menu-wrapper-div1'>
					<div className='menu-wrapper-1'>
						{/* ROŠTILJ */}

						<h1 className='menu-title'>ROŠTILJ</h1>

						<div className='section-food-container'>
							<h1 className='food-name'>
								Ćevapi 5 Kom.
								<span className='price'>
									240&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>115g</h5>
						</div>
						{/* ROŠTILJ 1 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Ćevapi 10 Kom.
								<span className='price'>
									440&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>230g</h5>
						</div>
						{/* ROŠTILJ 2 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Pljeskavica
								<span className='price'>
									440&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>230g</h5>
						</div>
						{/* ROŠTILJ 3 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Teleća Sudžukica
								<span className='price'>
									300&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>(Mala porcija) 115g</h5>
						</div>
						{/* ROŠTILJ 4 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Teleća Sudžukica
								<span className='price'>
									590&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>(Velika porcija) 230g</h5>
						</div>
						{/* ROŠTILJ 5 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Teleći kotlet
								<span className='price'>
									600&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>230g</h5>
						</div>
						{/* ROŠTILJ 6 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Teleća džigerica
								<span className='price'>
									580&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>230g</h5>
						</div>
					</div>

					<div className='menu-wrapper-2'>
						{/* PRILOZI  */}
						<h1 className='menu-title'>PRILOZI</h1>
						<div className='section-food-container'>
							<h1 className='food-name'>
								Kugla kajmaka
								<span className='price'>
									80&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>70g</h5>
						</div>
						{/* PRILOZI 1 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Jogurt
								<span className='price'>
									50&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.2l</h5>
						</div>
						{/* PRILOZI 2 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Somun pola
								<span className='price'>
									30&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>150g</h5>
						</div>
						{/* PRILOZI 3 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Somun Ceo
								<span className='price'>
									60&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>300g</h5>
						</div>
					</div>
				</div>

				<div className='menu-wrapper-div2'>
					<div className='menu-wrapper-3'>
						{/* SALATE */}
						<h1 className='menu-title'>Salate</h1>
						<div className='section-food-container'>
							<h1 className='food-name'>
								Šopska
								<span className='price'>
									220&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>350g</h5>
						</div>
						{/* SALATE 1 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Paradajz
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>200G</h5>
						</div>
						<div className='section-food-container'>
							<h1 className='food-name'>
								Kupus salata
								<span className='price'>
									100&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>150G</h5>
						</div>
						{/* SALATE 2 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Ljuta pečena paprika
								<span className='price'>
									50&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>1KOM</h5>
						</div>
					</div>

					<div className='menu-wrapper-4'>
						{/* DEZERTI */}
						<h1 className='menu-title'>Dezerti</h1>
						<div className='section-food-container'>
							<h1 className='food-name'>
								Baklave
								<span className='price'>
									220&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>150g</h5>
						</div>
					</div>
				</div>

				<h1 className='menu-title-drinks'>PIĆA</h1>
				<div className='menu-wrapper-div3'>
					{/* PIĆA 1 */}
					<div className='menu-wrapper-5'>
						{/* Pića */}

						<div className='section-food-container'>
							<h1 className='alcohol'>Bezalkoholna</h1>
							<h1 className='food-name'>
								Voda rosa
								<span className='price'>
									100&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 2 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Knjaz Miloš
								<span className='price'>
									110&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.25l</h5>
						</div>
						{/* PIĆA 3 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Granini sokovi
								<span className='price'>
									170&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.25l</h5>
						</div>
						{/* PIĆA 3 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								NESTEA ledeni čaj sokovi
								<span className='price'>
									170&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.25l</h5>
						</div>
						{/* PIĆA 4 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Koka kola
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 5 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Šveps
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 6 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Fanta
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 7 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Sprajt
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 8 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Čaj
								<span className='price'>
									140&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.2l</h5>
						</div>
						{/* PIĆA 9 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Guarana
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.25l</h5>
						</div>
					</div>
					<div className='menu-wrapper-6'>
						{/* PIĆA 10 */}
						<div className='section-food-container'>
							<h1 className='alcohol'>Alkoholna</h1>
							<h1 className='food-name'>
								Zaječarsko
								<span className='price'>
									160&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.33l</h5>
						</div>
						{/* PIĆA 11 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Bavarija točeno
								<span className='price'>
									150&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.25l</h5>
						</div>
						{/* PIĆA 12 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Bavarija točeno
								<span className='price'>
									210&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.5l</h5>
						</div>
						{/* PIĆA 13 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Crno vino vranac
								<span className='price'>
									280&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.18l</h5>
						</div>
						{/* PIĆA 14 */}
						<div className='section-food-container'>
							<h1 className='food-name'>
								Belo vino šardone
								<span className='price'>
									290&nbsp;<span className='valute'>din</span>
								</span>
							</h1>
							<h5 className='portion'>0.18l</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
);

export default Menu;
