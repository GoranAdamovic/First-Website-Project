import React from 'react';
import './Toolbar.css';
import SideDrawerButton from './SideDrawerButton';

const Toolbar = (props) => (
	<header className='toolbar'>
		<nav className='toolbar-nav'>
			<div className='side-drawer-button'>
				<SideDrawerButton click={props.drawerClickHandler} />
			</div>
			{/* <img className='toolbar-logo' src={logo} alt='' /> */}
			<div className='toolbar-space'></div>
			<ul className='toolbar-list'>
				<li className='toolbar-items'>
					<a href='/'>Početna</a>
				</li>
				<li className='toolbar-items'>
					<a href='o-nama'>O nama</a>
				</li>
				<li className='toolbar-items'>
					<a href='/jelovnik'>Jelovnik</a>
				</li>
				<li className='toolbar-items'>
					<a href='galerija'>Galerija</a>
				</li>
				<li className='toolbar-items'>
					<a href='/kontakt'>Kontakt</a>
				</li>
			</ul>
		</nav>
	</header>
);

export default Toolbar;
