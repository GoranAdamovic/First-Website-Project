import React, {Component} from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/Toolbar/SideDrawer';
import Backdrop from './Components/Toolbar/Backdrop';
import Homepage from './Components/Homepage/Homepage';
import AboutUs from './Components/AboutUs/AboutUs';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {Route} from 'react-router-dom';

class App extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((previousState) => {
			return {sideDrawerOpen: !previousState.sideDrawerOpen};
		});
	};

	backDropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};

	render() {
		let backDrop;

		if (this.state.sideDrawerOpen) {
			backDrop = <Backdrop click={this.backDropClickHandler} />;
		}
		return (
			<div className='App'>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backDrop}
				<Route exact path='/' component={Homepage} />
				<Route exact path='/o-nama' component={AboutUs} />
				<Route exact path='/jelovnik' component={Menu} />
				<Route exact path='/galerija' component={Gallery} />
				<Route exact path='/kontakt' component={Contact} />
				<Footer />
			</div>
		);
	}
}

export default App;
